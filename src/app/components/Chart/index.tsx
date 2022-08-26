import { Line } from "react-chartjs-2";
import { NoData } from "../NoData";
import { Heading } from "../Typography/Heading";
import { Wrapper } from "./styles";

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    },
  },
  legend: {
    display: true,
    position: "bottom",
    align: "center",
    labels: {
      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: false,
        position: "left",
        id: "cashflow",
      },
    ],
  },
};

interface ChartProps {
  data: Chart.ChartData;
  title: string;
}

export function Chart({ data, title }: ChartProps) {
  return (
    <Wrapper>
      <div className="title">
        <Heading level={3}>{title}</Heading>
      </div>
      {data ? (
        <Line
          width={600}
          height={139}
          type="line"
          data={data}
          options={options}
        />
      ) : (
        <NoData height={139} />
      )}
    </Wrapper>
  );
}
