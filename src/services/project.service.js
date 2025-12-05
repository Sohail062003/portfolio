import { apiInterceptor } from "../api/apiInterceptor";

class ProjectService {
    static async createProject(projectData) {
        return apiInterceptor("projects/createProject", {
            method: "POST",
            body: JSON.stringify(projectData),
        });
    }

    static async getAllProjects() {
        return apiInterceptor("projects/getAllProjects", {
            method: "GET",
        });
    }
}

export default ProjectService;