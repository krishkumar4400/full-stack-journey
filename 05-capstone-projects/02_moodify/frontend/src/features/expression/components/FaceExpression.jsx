import { useEffect, useRef, useState } from "react";

import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";
import { detectExpression } from "../../../utils/expressionDetector";

export default function FaceExpression() {
  const videoRef = useRef();

  const [expression, setExpression] = useState("Loading...");

  let faceLandmarker;

  async function init() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm",
    );

    faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
      },

      runningMode: "VIDEO",

      outputFaceBlendshapes: true,

      numFaces: 1,
    });

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = stream;

    videoRef.current.onloadedmetadata = () => {
      videoRef.current.play();

      predict();
    };

    function predict() {
      const result = faceLandmarker.detectForVideo(
        videoRef.current,
        performance.now(),
      );

      if (result.faceBlendshapes && result.faceBlendshapes.length) {
        const blendshapes = result.faceBlendshapes[0].categories;

        const exp = detectExpression(blendshapes);

        setExpression(exp);
      }

      requestAnimationFrame(predict);
    }
  }

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
              init();
            }}
          >
            Detect Expression
          </button>
        </div>
      </div>
    </div>
  );
}
