import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

const TEAM_TEXT_SIZE = px(32);
const TEAM_HEIGHT = px(46);
const TEAM_BACKGROUND_COLOR = 0x840084;
const TEAM_RADIUS = px(4);
const TEXT_COLOR = 0xf2ebf2;
const SCORE_BACKGROUND_COLOR = 0x00db87;
const DATE_BACKGROUND_COLOR = 0x3c3c3c;

const dateWidget = (game, currPage) => {
  // Date background
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: px(0) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: px(46),
    color: DATE_BACKGROUND_COLOR,
    radius: TEAM_RADIUS,
  });

  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: px(0) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: px(46),
    color: TEXT_COLOR,
    text_size: px(18),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: game.date,
  });
};

const homeTeamWidget = (game, currPage) => {
  // Home team background
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: px(56) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: TEAM_BACKGROUND_COLOR,
    radius: TEAM_RADIUS,
  });

  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: px(56) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: TEXT_COLOR,
    text_size: TEAM_TEXT_SIZE,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: game.homeTeam,
  });
};

const awayTeamWidget = (game, currPage) => {
  // away team background
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: px(148) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: TEAM_BACKGROUND_COLOR,
    radius: TEAM_RADIUS,
  });

  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: px(148) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: TEXT_COLOR,
    text_size: TEAM_TEXT_SIZE,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: game.awayTeam,
  });
};

const scoreWidget = (game, currPage) => {
  // Score background
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: px(102) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: SCORE_BACKGROUND_COLOR,
    radius: TEAM_RADIUS,
  });

  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: px(102) + DEVICE_HEIGHT * currPage,
    w: DEVICE_WIDTH,
    h: TEAM_HEIGHT,
    color: TEAM_BACKGROUND_COLOR,
    text_size: TEAM_TEXT_SIZE,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: `${game.homeScore} - ${game.awayScore}`,
  });
};

const statusWidget = (game, currPage) => {
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: px(240) + DEVICE_HEIGHT * currPage,
      w: DEVICE_WIDTH,
      h: TEAM_HEIGHT,
      color: SCORE_BACKGROUND_COLOR,
      text_size: TEAM_TEXT_SIZE,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: game.status,
    });

};

export const GameInfoWidget = (game, currPage) => {
  dateWidget(game, currPage);

  homeTeamWidget(game, currPage);

  scoreWidget(game, currPage);

  awayTeamWidget(game, currPage);

  statusWidget(game, currPage);
};
