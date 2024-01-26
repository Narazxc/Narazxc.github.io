import { useState } from "react";

function Card({ project }) {
  const [zoomImg, setZoomImg] = useState(false);

  function handleZoomImg() {
    // console.log(zoomImg);
    setZoomImg((zoomImg) => !zoomImg);
  }

  return (
    <a
      href={project.url}
      onMouseEnter={handleZoomImg}
      onMouseLeave={handleZoomImg}
      target="_blank"
      rel="noreferrer"
    >
      {/* bg-purple-300 hover:bg-green-300 */}
      <div
        className={`flex h-52 gap-4 rounded-md bg-white/30 backdrop-blur-sm ${
          zoomImg ? "shadow-lg" : ""
        }`}
      >
        <div className="h-full w-[181px] overflow-hidden rounded-bl-md rounded-tl-md">
          <img
            className={`h-full w-full  object-cover transition-all  ${
              zoomImg ? "scale-150" : ""
            }`}
            src="./amai_mask.png"
            alt="m"
          />
        </div>
        <div className="flex-1 p-2">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="mb-3 text-[12px] text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          </p>
          <p className="text-sm">Status: {project.status}</p>
          <p className="mb-3 text-sm">Deployed on: {project.deployedOn}</p>
          <p className="text-sm">Technologies:</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
