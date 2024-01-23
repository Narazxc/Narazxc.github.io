import { useState } from "react";

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
  const [user, setUser] = useState({});

  function handleOpenUploadModal() {
    setUploadModal(true);
  }

  function handleOpenDialog() {
    setIsOpenDialog(true);
  }

  return (
    <>
      <Header>
        <Navbar
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
          {user ? <p>Please log in first</p> : <UploadProjectForm />}
        </Modal>

        {/* <Modal isOpen={isOpenDialog} setIsOpen={setIsOpenDialog}>
          <UploadProjectForm />
        </Modal> */}

        <section className="first-section">
          <div className="flex h-[40vh] items-center gap-4">
            <p className="p-4">
              Hi, my name is Sitha Sovannara. I&#39;m an aspiring web developer.
            </p>

            <img
              className="hidden sm:block"
              src="https://static1.personality-database.com/profile_images/beb19f206a174b0e97872b7136d45041.png"
              style={{
                boxShadow: "0px 0px 8px 8px white inset",
              }}
              // src="./IMG_0166.JPG"
              alt="Amai Mask"
            />
          </div>
        </section>

        <section className="skills">
          <h2 className="my-4 text-2xl font-bold">Skill set</h2>
          <div className="my-4 flex flex-wrap items-center justify-center gap-6">
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

        <section>
          <ContactForm />
        </section>
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
