import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

import { getTeamTypesConfig, getTeamsConfig } from "./Teams";
import { dataListDebug } from "../debug/dataListdebug";
import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";
import { TableHeader } from "./TableHeader";
//import { dataList } from "../functions/dataList";
const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
const { messageBuilder } = getApp()._options.globalData;

export const CARD_WIDTH = DEVICE_WIDTH;
export const CARD_SPACING = 1;
export const SCROLL_LIST_HEIGHT = DEVICE_HEIGHT;

const ITEM_CONFIG_LENGHT = (DATA_TYPE_CONFIG_LENGHT = 5);

export const LeagueTable = () => {
  logger.log("Fetching league table");

  const fetchData = () => {
    messageBuilder
      .request({
        method: "GET_DATA",
      })
      .then((data) => {
        console.log("fetching data");
        const { result = {} } = data;
        const { text } = result;
        const slicedText = text.slice(1);
        logger.log("slicedText: ", slicedText); // PRINTS CORRECT OUTPUT HERE, BREAKS ON NEXT LINE

        const table = slicedText.map((row) => {
          logger.log("row: ", row);
          const match = row.match(
            /(\d+) +(.+?) +(\d+) +(\d+) +(\d+) +(\d+) +([+-]?\d+) +(\d+)/
          );
          logger.log("match: ", match);
          const [
            ,
            rank,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalDifference,
            points,
          ] = match;
          return {
            rank,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalDifference,
            points,
          };
        });

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
      })
      .catch((error) => {
        logger.log("Error in async function: ", error);
      });
  };
  fetchData();

  TableHeader();
};
