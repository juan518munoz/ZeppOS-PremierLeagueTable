import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

import { getTeamTypesConfig, getTeamsConfig } from "./Teams";
import { dataListDebug } from "../debug/dataListdebug";
import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";
import { TableHeader } from "./TableHeader";

export const CARD_WIDTH = DEVICE_WIDTH;
export const CARD_SPACING = 1;
export const SCROLL_LIST_HEIGHT = DEVICE_HEIGHT;

const dataList = dataListDebug();

function scrollListItemClick(list, index) {
  console.log("scrollListItemClick index=" + index);
}

const ITEM_CONFIG_LENGHT = (DATA_TYPE_CONFIG_LENGHT = 5);

export const LeagueTable = () => {
  hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
    x: 0, // pos start of whole collection
    y: getPositionPercY(10), // pos start of whole collection
    h: SCROLL_LIST_HEIGHT, // height of whole scroll list
    w: CARD_WIDTH, // width of whole collection
    item_space: CARD_SPACING, // space between cards
    item_config: getTeamsConfig(),
    item_config_count: ITEM_CONFIG_LENGHT,
    data_array: dataList,
    data_count: dataList.length,
    //item_click_func: scrollListItemClick,
    data_type_config: getTeamTypesConfig(),
    data_type_config_count: DATA_TYPE_CONFIG_LENGHT,
  });

  TableHeader();
};
