import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";
import { ErrorWidget } from "./ErrorWidget";
import { GameInfoWidget } from "./GameInfoWidget";
const logger = DeviceRuntimeCore.HmLogger.getLogger("PremierLeagueStats");
const { messageBuilder } = getApp()._options.globalData;

export const Fixture = () => {
  logger.log("Fetching league fixture");

  const loading = hmUI.createWidget(hmUI.widget.IMG, {
    x: DEVICE_WIDTH / 2 - 16,
    y: DEVICE_HEIGHT / 2,
    w: 32,
    h: 32,
    src: "loading.png",
  });

  const fetchFixture = () => {
    messageBuilder
      .request({
        method: "GET_FIXTURE",
      })
      .then((data) => {
        logger.log("fetching data");
        const { fixture = {}, success } = data;

        if (!success) {
          const { error } = data;
          ErrorWidget(error);
          return;
        }

        const pageCount = fixture.length + 1;
        const isVertical = true;
        hmUI.setScrollView(true, DEVICE_HEIGHT, pageCount, isVertical);

        let currPage = 0;
        fixture.forEach((game) => {
          GameInfoWidget(game, currPage);
          currPage++;
        });

        // No more matches
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0 + DEVICE_HEIGHT * currPage,
          w: DEVICE_WIDTH,
          h: DEVICE_HEIGHT,
          color: 0x38003d,
        });
      })
      .then(() => {
        hmUI.deleteWidget(loading);
      });
  };
  fetchFixture();
};
