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
      y: DEVICE_HEIGHT / 2,
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
      y: (DEVICE_HEIGHT / 2) + px(60),
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x05f1ff,
      press_color: 0x38dcea,
      text: "Fixtures",
      color: 0x38003d,
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/LeagueFixturePage",
        });
      },
    });

    // cambiar por https://docs.zepp.com/docs/1.0/reference/device-app-api/hmUI/widget/TEXT/ 
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: (DEVICE_HEIGHT / 2) + px(60) + px(60),
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x05f1ff,
      press_color: 0x38dcea,
      text: "About",
      color: 0x38003d,
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/AboutPage",
        });
      },
    });
  },
});
