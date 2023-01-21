const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
import { LeagueTable } from "../utils/components/LeagueTable";

Page({
  state: {},
  build() {
    logger.log("init league page");
    hmUI.setStatusBarVisible(false);
    LeagueTable();
  },
});
