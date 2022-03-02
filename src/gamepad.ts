let lastGamepadData = navigator.getGamepads();

/** this function should be called in game loop to get buttons pushed */
export function getButtonsJustPushed(): { [button: string]: boolean } {
  let pressed: { [button: string]: boolean } = {};
  let curGamepadData = navigator.getGamepads();
  let padNum = 0;
  for (let pad of curGamepadData) {
    let buttonNum = 0;
    if (pad == null) continue;
    for (let buttonss of pad.buttons) {
      // if last frame button was off, and this frame its on, then it was just pressed
      if (
        lastGamepadData[padNum] != null &&
        lastGamepadData[padNum].buttons[buttonNum].pressed == false &&
        curGamepadData[padNum].buttons[buttonNum].pressed == true
      )
        pressed[`P${padNum}B${buttonNum}`] = true;
      buttonNum += 1;
    }
    padNum += 1;
  }

  lastGamepadData = curGamepadData;
  return pressed;
}
