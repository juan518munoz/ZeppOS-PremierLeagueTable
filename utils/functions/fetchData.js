import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/config/constants";
const { messageBuilder } = getApp()._options.globalData;

export const fetchData = () => {
  messageBuilder
    .request({
      method: "GET_DATA",
    })
    .then((data) => {
      logger.log("receive data");
      logger.log(JSON.stringify(data));
      const { result = {} } = data;
      const { text } = result;
      const { content = "no content" } = JSON.parse(text);
      logger.log(content);

      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: (DEVICE_HEIGHT - px(20)) / 2,
        w: DEVICE_WIDTH,
        h: px(24),
        color: 0xffffff,
        text_size: px(20),
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: content,
      });
    });
};
