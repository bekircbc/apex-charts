import Chart from "react-apexcharts";
import { useState } from "react";

export const PageApex = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "series-2",
      data: [20, 30, 55, 75, 63, 60, 80, 134, 110],
    },
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={800}
      height={520}
    />
  );
};
