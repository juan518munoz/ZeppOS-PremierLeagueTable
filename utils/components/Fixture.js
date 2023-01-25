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

  const loading = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
    anim_path: "loading",
    anim_prefix: "loading",
    anim_ext: "png",
    anim_fps: 60,
    anim_size: 25,
    repeat_count: 0,
    anim_status: hmUI.anim_status.START,
    x: DEVICE_WIDTH / 2 - px(40),
    y: DEVICE_HEIGHT / 2 - px(40),
    anim_complete_call: () => {
      console.log("animation complete");
    },
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

        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: px(148) + DEVICE_HEIGHT * currPage,
          w: DEVICE_WIDTH,
          h: px(80),
          color: 0xffffff,
          text_size: px(28),
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: "No more\nmatches",
        });
      })
      .then(() => {
        hmUI.deleteWidget(loading);
      });
  };
  fetchFixture();
};
