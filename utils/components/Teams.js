import {
  getPositionPercX,
  getPositionPercY,
} from "../functions/getPositionsPer";

const CARD_HEIGHT = getPositionPercY(10);
const CARD_WIDTH = getPositionPercX(100);
const CARD_CENTER_Y = CARD_HEIGHT / 2;
const CARD_CENTER_X = CARD_WIDTH / 2;
const CARD_END_X = CARD_WIDTH;
const CARD_END_Y = CARD_HEIGHT;
const SCROLL_LIST_HEIGHT = getPositionPercY(100);

const POS_RANK = getPositionPercX(0);
const POS_TEAM = getPositionPercX(12);
const POS_MPLAYED = getPositionPercX(50);
const POS_GD = getPositionPercX(65);
const POS_POINTS = CARD_END_X - getPositionPercX(15);

const TEXT_SIZE = 16;
const TEXT_GREY = 0xbdc1c6;
const TEXT_WHITE = 0xffffff;

const BG_FIRST = 0x3aa757;
const BG_CHAMPIONS_LEAGUE = 0x4285f4;
const BG_EUROPA_LEAGUE = 0xfa7b17;
const BG_NOTHING = 0x202124;
const BG_RELEGATION = 0xea4335;

const ID_FIRST = 1;
const ID_CHAMPIONS_LEAGUE = 2;
const ID_EUROPA_LEAGUE = 3;
const ID_NOTHING = 4;
const ID_RELEGATION = 5;

export const getTeamsConfig = () => {
  return [
    getItemConfig(ID_FIRST, BG_FIRST),
    getItemConfig(ID_CHAMPIONS_LEAGUE, BG_CHAMPIONS_LEAGUE),
    getItemConfig(ID_EUROPA_LEAGUE, BG_EUROPA_LEAGUE),
    getItemConfig(ID_NOTHING, BG_NOTHING),
    getItemConfig(ID_RELEGATION, BG_RELEGATION),
  ];
};

const getItemConfig = (id_type, bg_color) => {
  return {
    type_id: id_type,
    item_bg_color: bg_color,
    item_bg_radius: 10,
    text_view: [
      getRankConfig(),
      getTeamConfig(),
      getPointsConfig(),
      getMatchesPlayedConfig(),
      getGoalDifferenceConfig(),
    ],
    text_view_count: 5,
    item_height: CARD_HEIGHT,
  };
};

const getRankConfig = () => {
  return {
    x: POS_RANK,
    y: CARD_CENTER_Y - 14,
    w: 24,
    h: 24,
    key: "rank",
    color: TEXT_WHITE,
    text_size: TEXT_SIZE,
  };
};

export const getTeamConfig = () => {
  return {
    x: POS_TEAM,
    y: CARD_CENTER_Y - 14,
    w: getPositionPercX(42),
    h: 24,
    key: "team",
    color: TEXT_GREY,
    text_size: TEXT_SIZE,
  };
};

// TODO GET MATCHES PLAYED CONFIG
const getMatchesPlayedConfig = () => {
  return {
    x: POS_MPLAYED,
    y: CARD_CENTER_Y - 14,
    w: 50,
    h: 24,
    key: "matchesPlayed",
    color: TEXT_GREY,
    text_size: TEXT_SIZE,
  };
};

// TODO GET GD CONFIG
const getGoalDifferenceConfig = () => {
  return {
    x: POS_GD,
    y: CARD_CENTER_Y - 14,
    w: 50,
    h: 24,
    key: "goalDifference",
    color: TEXT_GREY,
    text_size: TEXT_SIZE,
  };
};

const getPointsConfig = () => {
  return {
    x: POS_POINTS,
    y: CARD_CENTER_Y - 14,
    w: 24,
    h: 24,
    key: "points",
    color: TEXT_WHITE,
    text_size: TEXT_SIZE,
  };
};

export const getTeamTypesConfig = () => {
  return [
    getDataTypeConfig(ID_FIRST, 0, 0),
    getDataTypeConfig(ID_CHAMPIONS_LEAGUE, 1, 3),
    getDataTypeConfig(ID_EUROPA_LEAGUE, 4, 4),
    getDataTypeConfig(ID_NOTHING, 5, 16),
    getDataTypeConfig(ID_RELEGATION, 17, 19),
  ];
};

const getDataTypeConfig = (id_type, i_start, i_end) => {
  return {
    start: i_start, // first array element that uses config
    end: i_end, // last array element that uses config
    type_id: id_type, // item_config number used
  };
};
