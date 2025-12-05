import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="w-full">

      {/* ---------------- HEADER ---------------- */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 via-white to-purple-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Whether you have a project idea, want to collaborate, or just want to say hello —
          feel free to reach out.
        </p>
      </section>

      {/* ---------------- CONTACT CONTENT ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-12">

          {/* Left - Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <Mail className="text-indigo-600" size={26} />
                <p className="text-gray-700">sohailshaikh62003@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <Phone className="text-indigo-600" size={26} />
                <p className="text-gray-700">+91 00000 00000</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <MapPin className="text-indigo-600" size={26} />
                <p className="text-gray-700">Mumbai, India</p>
              </div>
            </div>

            <p className="mt-8 text-gray-500">
              I typically respond within 24 hours.
            </p>
          </div>

          {/* Right - Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 flex items-center justify-center gap-2 transition">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
