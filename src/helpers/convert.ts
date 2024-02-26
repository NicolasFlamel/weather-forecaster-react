export const convertTempToF = (celsiusTemp: number) =>
  (9 / 5) * celsiusTemp + 32;

export const getTempString = (celsius: number, isMetric: boolean) =>
  isMetric
    ? celsius.toFixed(2) + ' °C'
    : convertTempToF(celsius).toFixed(2) + ' °F';

export const getSpeedString = (metricSpeed: number, isMetric: boolean) =>
  isMetric
    ? metricSpeed.toFixed(2) + ' m/s'
    : (metricSpeed * 2.237).toFixed(2) + ' mph';
