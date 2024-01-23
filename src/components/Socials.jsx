import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function Socials() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-5 pl-3 sm:gap-8">
      <div>
        <Tippy
          content="Telegram"
          interactive={true}
          interactiveBorder={20}
          placement="bottom"
          arrow={false}
          className="bg-black text-[#fdf3e5]"
        >
          <a href="https://t.me/sovannara51" target="_blank" rel="noreferrer">
            <FaTelegram className="text-4xl" />
          </a>
        </Tippy>
      </div>
      <div>
        <Tippy
          content="github.com/Narazxc"
          interactive={true}
          placement="bottom"
          arrow={false}
          className="bg-black text-[#fdf3e5]"
        >
          <a href="https://github.com/Narazxc" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl" />
          </a>
        </Tippy>
      </div>
      <div>
        <Tippy
          content="My CV"
          interactive={true}
          placement="bottom"
          arrow={false}
          className="bg-black text-[#fdf3e5]"
        >
          <a href="cv.pdf" target="_blank" rel="noreferrer">
            <FaFilePdf className="ml-[1px] text-[33px]" />
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Socials;
