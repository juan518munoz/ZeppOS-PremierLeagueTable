const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
import { ErrorWidget } from "../utils/components/ErrorWidget";
import { Fixture } from "../utils/components/Fixture";

Page({
  state: {},
  build() {
    logger.log("init fixture page");
    hmUI.setStatusBarVisible(false);
    if (!hmBle.connectStatus()) {
      ErrorWidget("no bluetooth connection");
      return;
    }
    Fixture();
  },
});
