import { useRef, useState } from "react";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

import init from "../utils/utils.js";

export default function FaceExpression() {
  const videoRef = useRef();

  const [expression, setExpression] = useState("Loading...");

  //   init();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-12 text-white bg-black">
      <div className="max-sm:max-w-xl flex flex-col items-center justify-center">
        <video
          className=" border rounded-md border-white w-full"
          ref={videoRef}
          autoPlay
          playsInline
        />

        <h1 className="py-4 text-2xl text-center ">{expression}</h1>
        <div className="w-full">
          <button
            className="py-1.5 border w-full rounded active:scale-95 duration-150 font-light"
            onClick={() => {
              init(setExpression, videoRef);
            }}
          >
            Detect Expression
          </button>
        </div>
      </div>
    </div>
  );
}
