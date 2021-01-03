const ChartWrapper = ({ data, label, type = "bar" }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let chart;

    if (!!data) {
      chart = new Chart(canvasRef.current, {
        type,
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label,
              data: Object.values(data),
              borderWidth: 1,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 5,
                },
              },
            ],
          },
        },
      });
    }

    return () => {
      if (!!chart) {
        chart.destroy();
      }
    };
  }, [data, type]);

  return !!data ? (
    <canvas ref={canvasRef} width="400" height="200" />
  ) : (
    <Spinner />
  );
};
