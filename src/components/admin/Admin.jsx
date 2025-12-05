import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import ProjectService from "../../services/project.service";
import { NavLink } from "react-router-dom";

function Admin() {
  const [projects, setProjects] = useState([]);
  const [, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const handleFetchProjects = async () => {
      try {
        const response = await ProjectService.getAllProjects();
        if (response.ok) {
          const data = await response.json();
          setProjects(data.data.projects);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch projects");
        }
      } catch (err) {
        setError("Failed to fetch projects", err);
      }
    };
    handleFetchProjects();
  }, []);

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const stackInput = form.get("stack");
    const stackArray = stackInput
      ? stackInput.split(",").map((s) => s.trim())
      : [];

    const projectData = {
      title: form.get("title"),
      description: form.get("description"),
      link: form.get("link"),
      stack: stackArray, // <-- ARRAY here
    };

    try {
      const response = await ProjectService.createProject(projectData);
      if (response.ok) {
        const data = await response.json();
        alert("Project saved successfully!");
        setProjects([...projects, data.data]);
        setModalOpen(false);
        setEditData(null);
        // window.location.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to save project");
        return;
      }
    } catch (error) {
      setError("Failed to save project", error);
      return;
    }

    //   id: editData ? editData.id : Date.now(),
    //   title: form.get("title"),
    //   description: form.get("description"),
    // };

    // if (editData) {
    //   setProjects(projects.map((p) => (p.id === editData.id ? newData : p)));
    // } else {
    //   setProjects([...projects, newData]);
    // }

    // setModalOpen(false);
    // setEditData(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Admin Panel</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{project.title}</td>
                <td className="p-3">{project.description}</td>
                <td className="p-3 text-center flex justify-center gap-4">
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => {
                      setEditData(project);
                      setModalOpen(true);
                    }}
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
      <NavLink
        to="/"
        className="px-5 py-2 text-white bg-blue-600 rounded-lg text-lg font-medium 
               hover:bg-blue-700 transition-all duration-300 shadow-sm"
      >
        home
      </NavLink>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleSave}
            className="bg-white p-6 rounded-xl w-96 shadow-lg space-y-4"
          >
            <h2 className="text-xl font-semibold">
              {editData ? "Edit Project" : "Add Project"}
            </h2>

            <input
              name="title"
              defaultValue={editData?.title}
              type="text"
              placeholder="Project Title"
              required
              className="w-full p-2 border rounded-lg"
            />

            <textarea
              name="description"
              defaultValue={editData?.description}
              placeholder="Description"
              required
              className="w-full p-2 border rounded-lg"
            />

            <input
              name="link"
              defaultValue={editData?.link?.join(", ")}
              type="text"
              placeholder="Live Link"
              className="w-full p-2 border rounded-lg"
            />

            <input
              name="stack"
              defaultValue={editData?.stack}
              type="text"
              placeholder="Project Stack"
              required
              className="w-full p-2 border rounded-lg"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => {
                  setModalOpen(false);
                  setEditData(null);
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
