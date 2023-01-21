import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

export const ErrorWidget = (error = "Unknown error") => {
  hmUI.createWidget(hmUI.widget.IMG, {
    x: DEVICE_WIDTH / 2 - 32,
    y: DEVICE_HEIGHT / 2 - 32,
    w: 64,
    h: 64,
    src: "warning.png",
  });

  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: DEVICE_HEIGHT / 2 + 48,
    w: DEVICE_WIDTH,
    h: 24,
    color: 0xf8ac04,
    text_size: 20,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: error,
  });
};
