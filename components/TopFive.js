const TopFive = () => {
  const [data, setData] = React.useState({});
  const chart = React.useRef(null);

  React.useEffect(() => {
    // TODO: Get data
    setData({
      "Produkt 1": 4.9,
      "Produkt 2": 3.4,
      "Produkt 3": 3.3,
      "Produkt 4": 3.2,
      "Produkt 5": 2.1,
    });
  }, [setData]);

  // Render Chart
  React.useEffect(() => {
    const myChart = new Chart(chart.current, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "# Sterne Durchschnitt",
            data: Object.values(data),
            borderWidth: 1,
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
  }, [chart, data]);

  return (
    <div className="card shadow-sm mw-100 p-0">
      <div className="card-header text-center fw-bolder">
        Die folgenen fünf Produkte haben die besten Durchschnittsbewertungen.
      </div>
      <div className="card-body">
        <canvas ref={chart} width="400" height="200"></canvas>
      </div>
    </div>
  );
};
