import React from "react";

// Inline SVG components using currentColor
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.33 4.33 5 3.5 5S2 4.33 2 3.5 2.67 2 3.5 2s1.48.67 1.48 1.5zM2 8h3v12H2V8zm7 0h2.82v1.64h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.5 1.95 3.5 4.48V20h-3v-5.62c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20h-3V8z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.12-3.07 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39s1.98.13 2.91.39c2.22-1.5 3.2-1.18 3.2-1.18.64 1.6.24 2.78.12 3.07.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.23 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-11.5-11.5z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="white"
    width="40"
    height="40"
  >
    <path d="M23 0h-4L12 10 5 0H0l9 13-9 11h4l8-9 7 9h5l-9-12L23 0z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="white"
    width="40"
    height="40"
  >
    <path d="M22 7a6 6 0 01-4-2v10a7 7 0 11-7-7h1v3h-1a4 4 0 104 4V0h3a4 4 0 002 3 4 4 0 003 1v3z" />
  </svg>
);

const SocialLinks = ({ siteConfig }) => {
  // Pre-fill a professional email message
  const mailSubject = encodeURIComponent("Inquiry from Portfolio");
  const mailBody = encodeURIComponent(
    "Hi Raphael,\n\nI am [Your Name] from [Your Company/Portfolio]. I would like to discuss opportunities and collaboration. Please let me know how we can proceed.\n\nBest regards,\n[Your Name]  \n\n please feel free to edit this template"
  );
  const handleViewAndDownload = () => {
    const resumeUrl = "/Raphael_John_Resume.pdf"; // Ensure the file is in "public" folder

    // Open in new tab
    window.open(resumeUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Raphael_John_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mail Button */}
      <div className="flex flex-wrap gap-3 mt-12  justify-center">
        <a
          // href={`mailto:jraphael441@gmail.com?subject=${mailSubject}&body=${mailBody}`}
          // target="_blank"
          // rel="noopener noreferrer"
          onClick={handleViewAndDownload}
          className="flex items-center gap-2 border p-4"
        >
          View Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="mb-12 flex flex-wrap gap-4 mt-12 justify-center">
        <a
          className="duration-200 hover:opacity-80"
          href="https://www.linkedin.com/in/john-raphael-ml-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>

        <a
          className="duration-200 hover:opacity-80"
          href="https://github.com/deralph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>

        <a
          className="duration-200 hover:opacity-80"
          href="https://x.com/DeRalph15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>

        <a
          className="duration-200 hover:opacity-80"
          href="https://www.tiktok.com/@meet.raphael?_t=ZM-8tCUbEHSkAo&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TikTokIcon />
        </a>
      </div>
      {/* <a
        href="/Raphael_John_Resume.pdf" // Update with your resume file path
        // download="Raphael_John_Resume.pdf" // The file will be saved as "My_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#915EFF] text-xl hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Download Resume
      </a> */}
    </>
  );
};

export default SocialLinks;
