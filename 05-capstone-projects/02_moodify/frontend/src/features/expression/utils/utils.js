import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";
import { detectExpression } from "./expressionDetector";

let faceLandmarker;

async function init(setExpression, videoRef) {
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

export default init;
