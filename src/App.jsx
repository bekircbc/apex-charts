import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

export const App = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setOptions({
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
          2022,
        ],
      },
    });
    setSeries([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 30, 45, 65],
      },
      {
        name: "series-2",
        data: [20, 30, 55, 75, 63, 60, 80, 134, 110, 40, 55, 64],
      },
    ]);
  }, []);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="line" //"bar","line", "donut","area", "radar", "histogram", "pie", "radialBar", scatter, bubble, heatmap, candlestick
        width={800}
        height={520}
      />
    </>
  );
};
