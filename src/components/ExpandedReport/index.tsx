import './styles.css';
import { WeatherDataType } from 'types';

interface ReportDetailsProps {
  data: WeatherDataType;
}

const ExpandedReport = ({ data }: ReportDetailsProps) => {
  console.log(data);

  return (
    <section className="report-details">
      <h2>Current Report</h2>
    </section>
  );
};

export default ExpandedReport;
