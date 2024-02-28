import './styles.css';
import { WeatherType } from 'types';

export const clearSky = 'clear-sky';
export const fewClouds = 'few-clouds';
export const scatteredClouds = 'scattered-clouds';
export const brokenClouds = 'broken-clouds';
export const showerRain = 'shower-rain';
export const rain = 'rain';
export const thunderstorm = 'thunderstorm';
export const snow = 'snow';
export const mist = 'mist';

const setTheme = (weather?: WeatherType) => {
  if (!weather) return (document.body.classList.value = clearSky);

  const icon = weather.icon.slice(0, 2);

  switch (icon) {
    case '01':
      document.body.classList.value = clearSky;
      break;
    case '02':
      document.body.classList.value = fewClouds;
      break;
    case '03':
      document.body.classList.value = scatteredClouds;
      break;
    case '04':
      document.body.classList.value = brokenClouds;
      break;
    case '09':
      document.body.classList.value = showerRain;
      break;
    case '10':
      document.body.classList.value = rain;
      break;
    case '11':
      document.body.classList.value = thunderstorm;
      break;
    case '13':
      document.body.classList.value = snow;
      break;
    case '50':
      document.body.classList.value = mist;
      break;

    default:
      console.error('none passed', icon);
      break;
  }
};

export default setTheme;
