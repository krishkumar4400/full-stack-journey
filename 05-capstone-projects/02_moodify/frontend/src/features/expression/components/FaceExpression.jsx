import { useEffect, useRef, useState } from "react";

import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";
import { detectExpression } from "../../../utils/expressionDetector";



export default function FaceExpression() {
  const videoRef = useRef();

  const [expression, setExpression] = useState("Loading...");

  useEffect(() => {
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

    init();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video ref={videoRef} autoPlay playsInline width={640} />

      <h1>{expression}</h1>
    </div>
  );
}
