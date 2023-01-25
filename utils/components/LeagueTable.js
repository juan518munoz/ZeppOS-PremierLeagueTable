import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

import { getTeamTypesConfig, getTeamsConfig } from "./Teams";
import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";
import { TableHeader } from "./TableHeader";
const logger = DeviceRuntimeCore.HmLogger.getLogger("PremierLeagueStats");
const { messageBuilder } = getApp()._options.globalData;

export const CARD_WIDTH = DEVICE_WIDTH;
export const CARD_SPACING = 1;
export const SCROLL_LIST_HEIGHT = DEVICE_HEIGHT;

const ITEM_CONFIG_LENGHT = (DATA_TYPE_CONFIG_LENGHT = 5);

export const LeagueTable = () => {
  logger.log("Fetching league table");

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

  const fetchTable = () => {
    messageBuilder
      .request({
        method: "GET_TABLE",
      })
      .then((data) => {
        logger.log("fetching data");
        const { table = {}, success } = data;

        if (!success) {
          const { error } = data;
          ErrorWidget(error);
          return;
        }

        hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
          x: 0, // pos start of whole collection
          y: getPositionPercY(10), // pos start of whole collection
          h: SCROLL_LIST_HEIGHT - 22, // height of whole scroll list
          w: CARD_WIDTH, // width of whole collection
          item_space: CARD_SPACING, // space between cards
          item_config: getTeamsConfig(),
          item_config_count: ITEM_CONFIG_LENGHT,
          data_array: table,
          data_count: table.length,
          data_type_config: getTeamTypesConfig(),
          data_type_config_count: DATA_TYPE_CONFIG_LENGHT,
        });
        TableHeader();
      })
      .then(() => {
        hmUI.deleteWidget(loading);
      });
  };
  fetchTable();
};
