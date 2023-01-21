import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/config/device";

const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
import { League } from "../utils/components/League";

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
      y: DEVICE_HEIGHT - px(50),
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x2894aa,
      press_color: 0x38dcea,
      text: "Table",
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/LeagueTablePage",
        });
      },
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: DEVICE_HEIGHT - px(50 * 2) - px(20),
      w: DEVICE_WIDTH,
      h: 50,
      text_size: px(18),
      radius: px(12),
      normal_color: 0x2894aa,
      press_color: 0x38dcea,
      text: "Fixtures",
      click_func: () => {
        hmApp.gotoPage({
          file: "pages/LeagueFixturePage",
        });
      },
    });
  },
});
