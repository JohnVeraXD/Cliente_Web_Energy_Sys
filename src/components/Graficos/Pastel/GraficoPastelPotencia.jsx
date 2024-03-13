import * as echarts from 'echarts';
import React, { useEffect } from "react";

const GraficoPastelPotencia = () => {
useEffect(() => {
  const chartDom = document.getElementById("GAPPotencia");
  const myChart = echarts.init(chartDom);

  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
          color: "#FFAB91",
        },
        progress: {
          show: true,
          width: 30,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -25,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -32,
          length: 14,
          lineStyle: {
            width: 3,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -10,
          color: "black",
          fontSize: 15,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "100%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 30,
          fontWeight: "bolder",
          formatter: "{value} W",
          color: "inherit",
        },
        data: [
          {
            value: 20,
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: "#FD7347",
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 20,
          },
        ],
      },
    ],
  };

  setInterval(function () {
    const random = +(Math.random() * 60).toFixed(2);
    myChart.setOption({
      series: [
        {
          data: [
            {
              value: random,
            },
          ],
        },
        {
          data: [
            {
              value: random,
            },
          ],
        },
      ],
    });
  }, 2000);

  myChart.setOption(option);

  return () => {
    myChart.dispose(); // Limpia el gráfico al desmontar el componente
  };
}, []); // Asegúrate de que este efecto se ejecute solo una vez al montar el componente

return <div id="GAPPotencia" style={{ width: "100%", height: "100%" }}></div>;
};

export default GraficoPastelPotencia;
