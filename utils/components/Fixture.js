import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";
import { ErrorWidget } from "./ErrorWidget";
const logger = DeviceRuntimeCore.HmLogger.getLogger("PremierLeagueStats");
const { messageBuilder } = getApp()._options.globalData;

export const Fixture = () => {
  logger.log("Fetching league fixture");

  const loading = hmUI.createWidget(hmUI.widget.IMG, {
    x: DEVICE_WIDTH / 2 - 16,
    y: DEVICE_HEIGHT / 2,
    w: 32,
    h: 32,
    src: "loading/loading.png",
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

        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: DEVICE_HEIGHT / 2,
          w: DEVICE_WIDTH,
          h: 46,
          color: 0x04f3fb,
          text_size: 20,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: "fetched data",
        });
      })
      .then(() => {
        hmUI.deleteWidget(loading);
      });
  };
  fetchFixture();
};
