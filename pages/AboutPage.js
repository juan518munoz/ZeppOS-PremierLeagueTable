import { DEVICE_WIDTH } from "../utils/config/device";

Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 20,
      w: DEVICE_WIDTH,
      h: 46,
      color: 0x999999,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "League API by:",
    });

    hmUI.setStatusBarVisible(false);
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 44,
      w: DEVICE_WIDTH,
      h: 46,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "tarun7r",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 50,
      w: DEVICE_WIDTH,
      h: 140,
      color: 0x999999,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.ELLIPSIS,
      text: "Premier League logo\nproperty of:",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 114,
      w: DEVICE_WIDTH,
      h: 140,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.ELLIPSIS,
      text: "Football Association\nPremier League\nLimited",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 240,
      w: DEVICE_WIDTH,
      h: 20,
      color: 0x999999,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.ELLIPSIS,
      text: "Terms & conditions on:",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 264,
      w: DEVICE_WIDTH,
      h: 22,
      color: 0xffffff,
      text_size: 16,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "www.premierleague.com",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 300,
      w: DEVICE_WIDTH,
      h: 22,
      color: 0x999999,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "Created by:",
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 324,
      w: DEVICE_WIDTH,
      h: 22,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "juan518munoz",
    });
  },
});
