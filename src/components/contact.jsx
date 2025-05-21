import { Mail, Github, Linkedin, Instagram, Globe } from "lucide-react";

function ContactLinks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white text-black shadow-2xl rounded-xl p-8 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6 text-gray-700">
          I'm always open to connect! Whether you want to collaborate, give
          feedback, or just say hi — feel free to reach out through any of the
          platforms below:
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="mailto:mauryaayush749@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Mail size={20} /> Mail
          </a>

          <a
            href="https://github.com/codewithayush-69"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Github size={20} /> github
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-maurya-aa6664366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Linkedin size={20} /> linkedin
          </a>

          <a
            href="https://www.instagram.com/code.withayush69?igsh=MWtqbmVrOGRtZHEyOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Instagram size={20} /> @code.withayush69
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
