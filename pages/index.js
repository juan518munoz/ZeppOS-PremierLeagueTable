import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/config/device";

const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
Page({
  state: {},
  build() {
    logger.log("Init app!");
    hmUI.setStatusBarVisible(false);

    const img = hmUI.createWidget(hmUI.widget.IMG, {
      x: 64,
      y: 64,
      src: "icon.png",
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: DEVICE_HEIGHT / 2 + px(60),
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x05f1ff,
      press_color: 0x38dcea,
      text: "Table",
      color: 0x38003d,
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/LeagueTablePage",
        });
      },
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: DEVICE_HEIGHT / 2,
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x05f1ff,
      press_color: 0x38dcea,
      text: "Fixture",
      color: 0x38003d,
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/LeagueFixturePage",
        });
      },
    });

    const about = hmUI.createWidget(hmUI.widget.IMG, {
      x: DEVICE_WIDTH / 2 - 16,
      y: DEVICE_HEIGHT / 2 + px(60) + px(60) + 16,
      w: 32,
      h: 32,
      src: "about.png",
    });

    about.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      hmApp.gotoPage({
        file: "pages/AboutPage",
      });
    });
  },
});
