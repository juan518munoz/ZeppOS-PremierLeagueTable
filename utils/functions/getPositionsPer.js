import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../config/device";

/*
 * Return percentage position of X axis
 */
export const getPositionPercX = (percentage) => {
  return (percentage * DEVICE_WIDTH) / 100;
};

/*
 * Return percentage position of Y axis
 */
export const getPositionPercY = (percentage) => {
  return (percentage * DEVICE_HEIGHT) / 100;
};
