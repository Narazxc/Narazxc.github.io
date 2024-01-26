import Socials from "./Socials";
import viteLogo from "/vite.svg";

function Navbar({ children, onOpenDialog, onOpenUploadModal, showNavbar }) {
  return (
    <nav className={`px-4 ${showNavbar ? "navbar active" : "navbar"}`}>
      {children}
      <Socials />
      <div className="hidden sm:block">
        <ul className="nav-items">
          <li
            onClick={onOpenUploadModal}
            className="cursor-pointer hover:font-bold"
          >
            Upload Project
          </li>
          <li onClick={onOpenDialog} className="cursor-pointer hover:font-bold">
            Contact
          </li>
        </ul>
      </div>

      <img className="sm:hidden" src={viteLogo} alt="vite logo" />
    </nav>
  );
}

export default Navbar;
