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
    return "😊 Happy";
  }

  // 😮 Surprise
  if (jawOpen > 0.55 && browUp > 0.45 && eyeWide > 0.45) {
    return "😮 Surprise";
  }

  // 😠 Angry
  if (browDown > 0.5 && mouthPress > 0.45) {
    return "😠 Angry";
  }

  // 😢 Sad
  if (mouthFrown > 0.45 && browUp > 0.3) {
    return "😢 Sad";
  }

  return "😐 Neutral";
}
