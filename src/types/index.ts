export type WeatherType = {
  /**
   * @description `description`: Weather condition within the group. Please find more {@link https://openweathermap.org/forecast5#list | here}. You can get the output in your language. {@link https://openweathermap.org/forecast5#multi | Learn more}
   */
  description: string;
  /**
   * @description `icon`: Weather icon id
   */
  icon: string;
  /**
   * @description `id`: Weather condition id
   */
  id: number;
  /**
   * @description `main`: Group of weather parameters (Rain, Snow, Clouds etc.)
   */
  main: string;
};

export type WeatherDataType = {
  base: string;
  /**
   * @description `all`: Cloudiness, %
   */
  clouds: {
    /**
     * @description `all`: Cloudiness, %
     */
    all: number;
  };
  /**
   * @description `cod`: Internal parameter 3
   */
  cod: number;

  coord: {
    /**
     * @description `lat`: Geo location, latitude
     */
    lat: number;
    /**
     * @description `lon`: Geo location, longitude
     */
    lon: number;
  };
  /**
   * @description `dt`: Time of data forecasted, unix, UTC
   */
  dt: number;
  /**
   * @description `id`: City ID. Please note that built-in geocoder functionality has been deprecated. Learn more {@link https://openweathermap.org/current#builtin | here}
   */
  id: number;
  main: {
    /**
     * @description `temp`: Temperature. Unit Default: Kelvin, Metric: Celsius,
     */
    temp: number;
    /**
     * @description `feels_like`: This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    feels_like: number;
    /**
     *  @description `temp_min`: Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info {@link https://openweathermap.org/forecast5#min | here}. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    temp_min: number;
    /**
     *
     *  @description `temp_max`: Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info {@link https://openweathermap.org/forecast5#min | here}. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    temp_max: number;
    /**
     *  @description `pressure`: Atmospheric pressure on the sea level by default, hPa
     */
    pressure: number;
    /**
     * @description `humidity`: Humidity, %
     */
    humidity: number;
  };
  /**
   * @description `name`: City name. Please note that built-in geocoder functionality has been deprecated. Learn more {@link https://openweathermap.org/current#builtin |here}
   */
  name: string;
  sys: {
    /**
     * @description `type`:  Internal parameter
     */
    type: number;
    /**
     * @description `id`:  Internal parameter
     */
    id: number;
    /**
     * @description `country`: Country code (GB, JP etc.)
     */
    country: string;
    /**
     * @description `sunrise`:  Sunrise time, unix, UTC
     */
    sunrise: number;
    /**
     * @description `sunset`: Sunset time, unix, UTC
     */
    sunset: number;
  };
  /**
   * @description `timezone` Shift in seconds from UTC
   */
  timezone: number;
  /**
   * @description `visibility`: Average visibility, metres. The maximum value of the visibility is 10km
   */
  visibility: number;
  weather: WeatherType[];
  wind: {
    /**
     * @description `speed`: Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
     */
    speed: number;
    /**
     * @description `deg`: Wind direction, degrees (meteorological)
     */
    deg: number;
  };
};

export type ForecastDataListType = {
  /**
   * @description `all`: Cloudiness, %
   */
  clouds: {
    /**
     * @description `all`: Cloudiness, %
     */
    all: number;
  };
  /**
   * @description `dt`: Time of data forecasted, unix, UTC
   */
  dt: number;
  /**
   * @description `dt_txt`: Time of data forecasted, ISO, UTC
   */
  dt_txt: string;
  main: {
    /**
     * @description `temp`: Temperature. Unit Default: Kelvin, Metric: Celsius,
     */
    temp: number;
    /**
     * @description `feels_like`: This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    feels_like: number;
    /**
     *  @description `temp_min`: Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info {@link https://openweathermap.org/forecast5#min | here}. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    temp_min: number;
    /**
     *
     *  @description `temp_max`: Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info {@link https://openweathermap.org/forecast5#min | here}. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    temp_max: number;
    /**
     *  @description `pressure`: Atmospheric pressure on the sea level by default, hPa
     */
    pressure: number;
    /**
     * @description `sea_level`:  Atmospheric pressure on the sea level, hPa
     */
    sea_level: number;
    /**
     * @description `grnd_level`: Atmospheric pressure on the ground level, hPa
     */
    grnd_level: number;
    /**
     * @description `humidity`: Humidity, %
     */
    humidity: number;
    /**
     * @description `temp_kf`: Internal parameter
     */
    temp_kf: number;
  };
  /**
   * @description `pop`: Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
   */
  pop: number;
  sys: {
    /**
     * @description `pod`: Part of the day (n - night, d - day)
     */
    pod: string;
  };
  /**
   * @description `visibility`: Average visibility, metres. The maximum value of the visibility is 10km
   */
  visibility: number;

  weather: WeatherType[];
  /**
   * @description `wind`:
   */
  wind: {
    /**
     * @description `speed`: Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
     */
    speed: number;
    /**
     * @description `deg`: Wind direction, degrees (meteorological)
     */
    deg: number;
    /**
     * @description `gust`: Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
     */
    gust: number;
  };
};

export type ForecastDataType = {
  city: {
    /**
     * @description `id` City ID. Please note that built-in geocoder functionality has been deprecated. Learn more {@link https://openweathermap.org/forecast5#builtin | here}
     */
    id: number;
    /**
     *  @description `name` City name. Please note that built-in geocoder functionality has been deprecated. Learn more {@link https://openweathermap.org/forecast5#builtin | here}
     */
    name: string;
    coord: {
      /**
       * @description `lat`: Geo location, latitude
       */
      lat: number;
      /**
       * @description `lon`: Geo location, longitude
       */
      lon: number;
    };
    /**
     * @description `country`: Country code (GB, JP etc.). Please note that built-in geocoder functionality has been deprecated. Learn more {@link https://openweathermap.org/forecast5#builtin | here}
     */
    country: string;
    /**
     * @description `population` City population
     */
    population: number;
    /**
     * @description `timezone` Shift in seconds from UTC
     */
    timezone: number;
    /**
     * @description `sunrise` Sunrise time, Unix, UTC
     */
    sunrise: number;
    /**
     * @description `sunset` Sunset time, Unix, UTC
     */
    sunset: number;
  };
  /**
   * @description `cnt`: A number of timestamps returned in the API response
   */
  cnt: number;
  /**
   * @description `cod`: Internal parameter 3
   */
  cod: string;
  list: ForecastDataListType[];
  /**
   *  @description `message`: message Internal parameter
   */
  message: any;
};
