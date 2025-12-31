import TextType from "../ui/TextType";
import CountUp from "../ui/CountUp";

function Home() {
  return (
    <div className="w-full">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 flex items-center pt-56 md:pt-0">
        <div className="max-w-7xl mx-auto w-full px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 ">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Hello, I’m Sohail Shaikh.<br />
              <span className="text-indigo-600">
                <TextType
                  text={[
                    "A Full Stack Developer.",
                    "A Tech Enthusiast.",
                  ]}
                  typingSpeed={190}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter=""
                />
              </span>
            </h1>

            <p className="text-lg text-gray-600 mt-4 max-w-xl">
              MERN Stack Developer who builds clean, modern and
              performance-focused web applications. Crafting beautiful UI with
              smooth UX is my passion.
            </p>

            <div className="flex gap-4 mt-7">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 transition">
                View My Work
              </button>

              <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-96 md:w-96 md:h-[450px] rounded-xl overflow-hidden shadow-xl border bg-white">
              <img
                // src="https://i.pinimg.com/736x/ad/b9/e3/adb9e3d03619f77abadde5f92fb67773.jpg"
                src="https://themewagon.github.io/picto/assets/person-CqOZwXV1.png"
                alt="profile"
                className="w-full h-full object-cover hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHT CARDS ---------------- */}
      <section className="mt-64 md:mt-0 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-3xl font-bold text-indigo-600">
              <CountUp
                from={0}
                to={6}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /> + Month
            </h3>
            <p className="mt-2 text-gray-600">Industry Experience</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-3xl font-bold text-indigo-600">
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                
                className="count-up-text"
              />
              + Projects</h3>
            <p className="mt-2 text-gray-600">Built with MERN & Java</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-3xl font-bold text-indigo-600">
              Clean & Scalable
            </h3>
            <p className="mt-2 text-gray-600">Code Quality & UI/UX Focused</p>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT I DO ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p className="text-gray-600">
                Building modern, responsive and pixel-perfect UI using React &
                Tailwind.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-600">
                Creating secure, scalable backend APIs using Node.js &
                Express.js.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">Full-Stack Solutions</h3>
              <p className="text-gray-600">
                Completing end-to-end projects combining frontend + backend +
                database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TECH ICON STRIP ---------------- */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Tech I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-lg font-medium">
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              React
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              Node.js
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              Express.js
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              Next.js
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              TailwindCSS
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">CSS</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">
              Java
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg shadow">Git</span>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-12 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Looking for a Developer?</h2>
        <p className="text-gray-200">Let’s build something great together.</p>
        <button className="mt-6 px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Me
        </button>
      </section>
    </div>
  );
}

export default Home;
