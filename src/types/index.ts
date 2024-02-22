type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherDataType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherType[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type ForecastDataListType = {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: WeatherType[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
};

export type ForecastDataType = {
  cod: string;
  message: any;
  cnt: number;
  list: ForecastDataListType[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};
