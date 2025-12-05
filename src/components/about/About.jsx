// import React from 'react'

// function About() {
//   return (
//     <div className="w-full">

//       {/* ---------------- ABOUT HERO ---------------- */}
//       <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
//         <div className="max-w-6xl mx-auto px-8 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             I’m Sohail Shaikh, a MERN Stack Developer passionate about creating
//             clean, user-friendly and performance-focused web applications.
//             I love transforming ideas into real, working digital products.
//           </p>
//         </div>
//       </section>

//       {/* ---------------- ABOUT SECTION ---------------- */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

//           {/* Left Image */}
//           <div className="flex justify-center">
//             <div className="w-80 h-96 md:w-96 md:h-[420px] rounded-xl overflow-hidden shadow-xl border bg-white">
//               <img
//                 src="https://themewagon.github.io/picto/assets/person-CqOZwXV1.png"
//                 alt="profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Who I Am
//             </h2>

//             <p className="text-gray-700 leading-relaxed mb-4">
//               I’m a dedicated full-stack developer who enjoys building both
//               the frontend and backend of web applications. I focus on writing
//               **clean**, **scalable**, and **maintainable** code using
//               modern tools like React, Node.js, Express.js and MongoDB.
//             </p>

//             <p className="text-gray-700 leading-relaxed mb-4">
//               My goal is to create digital experiences that are simple,
//               fast, and enjoyable to use — blending good design with strong
//               engineering.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               I’ve worked on multiple real-world projects including e-commerce,
//               dashboards, authentication systems, and full MERN applications.
//               Every project helps me grow and gives me a chance to solve
//               meaningful problems.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ---------------- SKILLS GRID ---------------- */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-10">
//           <h2 className="text-3xl font-bold text-center mb-10">
//             My Skillset
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Skill Item */}
//             <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-bold mb-3">Frontend</h3>
//               <p className="text-gray-600">
//                 React, Next.js, TailwindCSS, JavaScript, UI/UX design principles.
//               </p>
//             </div>

//             <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-bold mb-3">Backend</h3>
//               <p className="text-gray-600">
//                 Node.js, Express.js, REST APIs, authentication, middleware.
//               </p>
//             </div>

//             <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-bold mb-3">Database & Tools</h3>
//               <p className="text-gray-600">
//                 MongoDB, Git, GitHub, JWT, cloud deployments.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CTA ---------------- */}
//       <section className="py-12 bg-indigo-600 text-white text-center">
//         <h2 className="text-3xl font-bold mb-2">Want to work together?</h2>
//         <p className="text-gray-200">
//           I’m open to freelance work and collaboration.
//         </p>
//         <button className="mt-6 px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition">
//           Contact Me
//         </button>
//       </section>
//     </div>
//   );
// }

// export default About



import React from "react";
import { Code, Monitor, Database, Layers } from "lucide-react";

function About() {
  return (
    <div className="w-full">

      {/* ---------- HERO ---------- */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            MERN Stack Developer with a deep passion for building clean,
            modern, and high-performing digital experiences. I blend design
            sense with engineering to create seamless user interfaces and
            scalable backend systems.
          </p>
        </div>
      </section>

      {/* ---------- BIO + IMAGE ---------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-80 h-96 md:w-96 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border bg-white">
              <img
                src="https://themewagon.github.io/picto/assets/person-CqOZwXV1.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences with Purpose
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              I specialize in building full-stack web applications using the MERN Stack.
              My approach combines clean UI/UX, strong logic, and performance optimization
              — ensuring every project is both beautiful and efficient.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              I enjoy solving real-world problems, turning ideas into finished digital products,
              and delivering experiences that users genuinely love interacting with.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I value learning, attention to detail, and building things that
              stand out with quality, clarity, and simplicity.
            </p>
          </div>

        </div>
      </section>

      {/* ---------- EXPERIENCE HIGHLIGHTS ---------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-10">

          <h2 className="text-3xl font-bold text-center mb-14">
            What I Bring to the Table
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <Monitor className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Frontend Excellence</h3>
              <p className="text-gray-600">
                Modern, clean and responsive UI using React, Tailwind, and UX principles.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <Database className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Backend Logic</h3>
              <p className="text-gray-600">
                Strong APIs, authentication, database modeling, and server-side logic.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <Layers className="w-10 h-10 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Product Thinking</h3>
              <p className="text-gray-600">
                A balance of design, usability, structure, and performance in every project.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-10">

          <h2 className="text-3xl font-bold text-center mb-10">Skills & Tools</h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "React.js", "Next.js", "Tailwind CSS",
              "JavaScript", "Node.js", "Express.js",
              "MongoDB", "REST APIs", "Git & GitHub",
              "JWT Auth", "Vite", "UI/UX Thinking"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 
                text-sm font-medium hover:bg-gray-200 transition shadow-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* ---------- VALUES SECTION ---------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-10 text-center">

          <h2 className="text-3xl font-bold mb-6">My Values as a Developer</h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-14">
            I believe great products come from clarity, consistency,
            sharp attention to detail, and deep care for user experience.
            My mindset is simple: build things that matter, and build them well.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <Code className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-gray-600 text-sm">
                Maintainable, scalable, readable code that lasts.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <Monitor className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">User-First Design</h3>
              <p className="text-gray-600 text-sm">
                Interfaces that feel natural, smooth, and enjoyable.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <Layers className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Detail-Oriented</h3>
              <p className="text-gray-600 text-sm">
                Pixel-perfect layouts, performance, and precision.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Let’s Build Something Great</h2>
        <p className="text-gray-200">Open to freelance work, collaboration, and full-time roles.</p>

        <button className="mt-6 px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Me
        </button>
      </section>
    </div>
  );
}

export default About;
