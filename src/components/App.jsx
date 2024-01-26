import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./CustomCursor.css";

import "../App.css";

// components
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Logo from "./Logo";
import Modal from "./Modal";
import Form from "./Form";
import GridContainer from "./GridContainer";

// langauge icons
// import cssIcon from "../assets/css3-original.svg";
// import htmlIcon from "../assets/html5-original.svg";
import javascriptIcon from "../assets/javascript-original.svg";
import reactIcon from "../assets/react-original.svg";
import tailwindcssIcon from "../assets/tailwindcss-plain.svg";
import nodejsIcon from "../assets/nodejs-original.svg";
import expressIcon from "../assets/express-original.svg";
import laravelIcon from "../assets/laravel-plain-wordmark.svg";
import UploadProjectForm from "./UploadProjectForm";
import ContactForm from "./ContactForm";
import ProjectList from "./ProjectList";

function App() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [showFlicker, setShowFlicker] = useState(false);
  const [hideFlicker, setHideFlicker] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [user, setUser] = useState({});

  // console.log(showFlicker);

  function handleShowFlicker() {
    setShowFlicker(true);
  }

  function handleOpenUploadModal() {
    setUploadModal(true);
  }

  function handleOpenDialog() {
    setIsOpenDialog(true);
  }

  useEffect(() => {
    function handleHideNavbar() {
      if (window.scrollY >= 90) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    // Add event listener on mount
    window.addEventListener("scroll", handleHideNavbar);

    // Remove event listener on unmount to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleHideNavbar);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  // console.log(showNavbar);

  useEffect(function () {
    setTimeout(() => {
      setHideFlicker(true);
    }, 12000);
  }, []);

  // Create a dynamic CSS rule based on showFlicker
  const dynamicStyle = `
    .type::after {
      content: "█";
      font-size: 2.5rem;
      line-height: 2.5rem;
      animation: ${showFlicker ? "cursor 1.1s infinite step-start" : "none"};
    }
  `;

  const dynamicStyle2 = `
    .type::after {
      content: "";
    }
  `;

  return (
    <>
      {showFlicker && !hideFlicker ? <style>{dynamicStyle}</style> : null}
      {hideFlicker && <style>{dynamicStyle2}</style>}
      <Header>
        <Navbar
          showNavbar={showNavbar}
          onOpenDialog={handleOpenDialog}
          onOpenUploadModal={handleOpenUploadModal}
        >
          <Logo />
        </Navbar>
      </Header>
      <Main>
        <Modal isOpen={isOpenDialog} setIsOpen={setIsOpenDialog}>
          <Form />
        </Modal>

        <Modal isOpen={uploadModal} setIsOpen={setUploadModal}>
          {/* {user ? <p>Please log in first</p> : <UploadProjectForm />} */}
          <ContactForm />
        </Modal>

        {/* <Modal isOpen={isOpenDialog} setIsOpen={setIsOpenDialog}>
          <UploadProjectForm />
        </Modal> */}

        <section className="first-section">
          <div className="flex h-[100vh] items-center gap-4">
            <p className="flex-wrap px-10 py-4 sm:p-4 md:w-[768px]">
              <TypeAnimation
                cursor={false}
                className={`type`}
                sequence={[
                  800,
                  "Hi, my name is Sitha Sovannara, an aspiring web developer.",
                  () => {
                    handleShowFlicker();
                  },
                ]}
              />
            </p>

            <div className="hidden h-[200px] w-[200px] lg:block">
              <img
                className=""
                src="./amai_mask.png"
                // src="https://static1.personality-database.com/profile_images/beb19f206a174b0e97872b7136d45041.png"
                style={{
                  boxShadow: "0px 0px 8px 8px white inset",
                }}
                // src="./IMG_0166.JPG"
                alt="Amai Mask"
              />
            </div>
          </div>
        </section>

        <section className="skills">
          <h2 className="my-4 text-2xl font-bold">Skill set</h2>
          <div className="my-4 flex flex-wrap items-center justify-center gap-6 px-10">
            {/* <img className="w-12" src={htmlIcon} alt="html icon" />
            <img className="w-12" src={cssIcon} alt="css icon" /> */}
            <img
              className="w-12 transition-all hover:scale-150"
              src={javascriptIcon}
              alt="javascript icon"
            />
            <img
              className="w-14 transition-all hover:scale-150"
              src={tailwindcssIcon}
              alt="tailwindcss icon"
            />
            <img
              className="w-12 transition-all hover:scale-150"
              src={reactIcon}
              alt="react icon"
            />
            <img
              className="w-12 transition-all hover:scale-150"
              src={nodejsIcon}
              alt="nodejs icon"
            />
            <img
              className="w-12 transition-all hover:scale-150"
              src={expressIcon}
              alt="express icon"
            />
            <img
              className="w-12 transition-all hover:scale-150"
              src={laravelIcon}
              alt="laravel icon"
            />
          </div>
        </section>
        <section className="projects mb-14 p-4">
          <h2 className="my-4 text-2xl font-bold">Projects</h2>
          <GridContainer>
            <ProjectList />
          </GridContainer>
        </section>

        <section>{/* <ContactForm /> */}</section>
      </Main>
      <Footer>
        <div>
          <Logo />
          <div className="first-link">
            <h5>contact</h5>
            <ul>
              <li>sub 1</li>
              <li>sub 2</li>
              <li>sub 3</li>
            </ul>
          </div>
          <div>two</div>
        </div>
      </Footer>
    </>
  );
}

export default App;
