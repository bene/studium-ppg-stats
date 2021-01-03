const Products = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [chartType, setChartType] = React.useState("bar");

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // TODO: Get data
    setData([
      {
        name: "Produkt 1",
        ratings: [1, 2, 2, 3, 4],
      },
      {
        name: "Produkt 2",
        ratings: [1, 2, 2, 3, 4],
      },
      {
        name: "Produkt 3",
        ratings: [1, 2, 2, 3, 4],
      },
      {
        name: "Produkt 4",
        ratings: [1, 2, 2, 3, 4],
      },
      {
        name: "Produkt 5",
        ratings: [1, 2, 2, 3, 4],
      },
      {
        name: "Produkt 6",
        ratings: [1, 2, 2, 3, 4],
      },
    ]);
  }, [setData]);

  const items = data
    .filter((product) =>
      !searchQuery ? true : product.name.includes(searchQuery)
    )
    .map((product) => {
      return (
        <div key={product.name} className="col">
          <div className="card shadow-sm mw-100 p-0">
            <div className="card-header text-center fw-bolder">
              {product.name}
            </div>
            <div className="card-body">
              <ChartWrapper
                label="Anzahl der Bewertungen"
                type={chartType}
                data={{
                  "5 Sterne": product.ratings[4],
                  "4 Sterne": product.ratings[3],
                  "3 Sterne": product.ratings[2],
                  "2 Sterne": product.ratings[1],
                  "1 Stern": product.ratings[0],
                }}
              />
            </div>
          </div>
        </div>
      );
    });

  return (
    <React.Fragment>
      <hr />
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control me-2"
          aria-label="Produkt Suche"
          placeholder="Suchen Sie nach einem Produkt..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="form-select"
          aria-label="Diagramm Art"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="pie">Torten</option>
          <option value="bar">Balken</option>
        </select>
      </div>
      <hr className="mb-0" />
      <div className="row row-cols-2">{items}</div>
    </React.Fragment>
  );
};
