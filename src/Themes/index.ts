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
  const favicon = document.head.querySelector(
    'link[rel=icon]',
  ) as HTMLLinkElement;

  const icon = weather.icon.slice(0, 2);

  switch (icon) {
    case '01':
      document.body.classList.value = clearSky;

      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/01d@2x.png';
      break;
    case '02':
      document.body.classList.value = fewClouds;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/02d@2x.png';
      break;
    case '03':
      document.body.classList.value = scatteredClouds;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/03d@2x.png';
      break;
    case '04':
      document.body.classList.value = brokenClouds;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/04d@2x.png';
      break;
    case '09':
      document.body.classList.value = showerRain;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/09d@2x.png';
      break;
    case '10':
      document.body.classList.value = rain;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/10d@2x.png';
      break;
    case '11':
      document.body.classList.value = thunderstorm;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/11d@2x.png';
      break;
    case '13':
      document.body.classList.value = snow;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/13d@2x.png';
      break;
    case '50':
      document.body.classList.value = mist;
      if (!favicon) break;

      favicon.href = 'https://openweathermap.org/img/wn/50d@2x.png';
      break;

    default:
      console.error('none passed', icon);
      break;
  }
};

export default setTheme;
