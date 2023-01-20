const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
import { League } from "../utils/components/League";
const { messageBuilder } = getApp()._options.globalData; // DELETE

Page({
  state: {},
  build() {
    logger.log("Init app!");
    hmUI.setStatusBarVisible(false);
    League();
  },
});
