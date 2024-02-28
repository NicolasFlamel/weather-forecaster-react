import './styles.css';
import { WeatherDataType } from 'types';

interface ReportDetailsProps {
  data: WeatherDataType;
}

const ExpandedReport = ({ data }: ReportDetailsProps) => {
  console.log(data);

  return (
    <section className="report-details">
      <h1>Current Report</h1>
    </section>
  );
};

export default ExpandedReport;
