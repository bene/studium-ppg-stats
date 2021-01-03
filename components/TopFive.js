const TopFive = () => {
  const [data, setData] = React.useState();

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

  return (
    <div className="card shadow-sm mw-100 p-0">
      <div className="card-header text-center fw-bolder">
        Die folgenen fünf Produkte haben die besten Durchschnittsbewertungen.
      </div>
      <div className="card-body">
        <ChartWrapper label="# Sterne Durchschnitt" data={data} />
      </div>
    </div>
  );
};
