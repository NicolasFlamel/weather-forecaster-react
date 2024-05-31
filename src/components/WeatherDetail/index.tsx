import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, Card, ExpandedForecast, ExpandedReport } from 'components';
import { Dispatch, SetStateAction, useEffect } from 'react';
import setTheme from 'Themes';
import { ReactComponent as ReturnSvg } from 'assets/images/return-arrow.svg';

interface WeatherDetailProps {
  setView: Dispatch<SetStateAction<boolean>>;
}

const size = '30px';

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
      <Button className="close-details" onClick={handleClose}>
        <ReturnSvg height={size} width={size} />
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
