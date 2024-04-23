import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, Card, ExpandedForecast, ExpandedReport } from 'components';
import { Dispatch, SetStateAction, useEffect } from 'react';
import setTheme from 'Themes';

interface WeatherDetailProps {
  setView: Dispatch<SetStateAction<boolean>>;
}

const WeatherDetail = ({ setView }: WeatherDetailProps) => {
  const { detailedData } = useWeather();

  useEffect(() => {
    if (!detailedData) {
      console.error('!detailedData');
    } else if (Array.isArray(detailedData)) {
      setTheme(detailedData[4].weather[0]);
    } else {
      setTheme(detailedData.weather[0]);
    }
  }, [detailedData]);

  const handleClose = () => {
    setView((prev) => !prev);
  };

  if (!detailedData) {
    console.log('!detailedData');
    return <h1 className="error">Error !detailedData</h1>;
  }

  return (
    <Card>
      <Button className="close-details close-btn" onClick={handleClose}>
        X
      </Button>
      {Array.isArray(detailedData) ? (
        <ExpandedForecast data={detailedData} />
      ) : (
        <ExpandedReport data={detailedData} />
      )}
    </Card>
  );
};

export default WeatherDetail;
