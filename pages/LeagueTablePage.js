const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
import { ErrorWidget } from "../utils/components/ErrorWidget";
import { LeagueTable } from "../utils/components/LeagueTable";

Page({
  state: {},
  build() {
    logger.log("init league page");
    hmUI.setStatusBarVisible(false);
    if (!hmBle.connectStatus()) {
      ErrorWidget("no bluetooth connection");
      return;
    }
    LeagueTable();
  },
});
