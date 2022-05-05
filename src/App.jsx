import Chart from "react-apexcharts";
import { useState } from "react";

export const PageApex = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
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
      type="radar" //"bar","line", "donut","area", "radar", "histogram", "pie", "radialBar", scatter, bubble, heatmap, candlestick
      width={800}
      height={520}
    />
  );
};
