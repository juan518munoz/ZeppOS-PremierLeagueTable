import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";

const HEADER_HEIGHT = 22;

export const TableHeader = () => {
  const rank = hmUI.createWidget(hmUI.widget.TEXT, {
    x: getPositionPercX(0),
    y: getPositionPercY(0),
    w: 24,
    h: HEADER_HEIGHT,
    color: 0xffffff,
    text_size: 18,
    align_h: hmUI.align.CENTER_H,
    text_style: hmUI.text_style.NONE,
    text: "#",
  });

  const team = hmUI.createWidget(hmUI.widget.TEXT, {
    x: getPositionPercX(12),
    y: 0,
    w: getPositionPercX(42),
    h: HEADER_HEIGHT,
    color: 0xffffff,
    text_size: 18,
    align_h: hmUI.align.CENTER_H,
    text_style: hmUI.text_style.NONE,
    text: "team",
  });
};
