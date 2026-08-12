export function detectExpression(blendshapes) {
  const get = (name) =>
    blendshapes.find((b) => b.categoryName === name)?.score ?? 0;

  const smile = (get("mouthSmileLeft") + get("mouthSmileRight")) / 2;

  const jawOpen = get("jawOpen");

  const browUp = get("browInnerUp");

  const eyeWide = (get("eyeWideLeft") + get("eyeWideRight")) / 2;

  const browDown = (get("browDownLeft") + get("browDownRight")) / 2;

  const mouthPress = (get("mouthPressLeft") + get("mouthPressRight")) / 2;

  const mouthFrown = (get("mouthFrownLeft") + get("mouthFrownRight")) / 2;

  // 😊 Happy
  if (smile > 0.65) {
    return "happy";
  }

  // 😮 Surprise
  if (jawOpen > 0.05 && browUp > 0.05 && eyeWide > 0.05) {
    return "surprised";
  }

  // 😠 Angry
  if (browDown > 0.05 && mouthPress > 0.05) {
    return "angry";
  }

  // 😢 Sad
  if (mouthFrown > 0.01 && browUp > 0.01) {
    return "sad";
  }

  return "normal";
}
