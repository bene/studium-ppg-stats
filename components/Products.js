const Products = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [chartType, setChartType] = React.useState("bar");

  const [data, setData] = React.useState();
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    fetch("/wp-json/ppg-stats/v1/product-ratings")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid response.");
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [setData, setHasError]);

  const items =
    !!data &&
    data
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
          disabled={hasError}
        />
        <select
          className="form-select"
          aria-label="Diagramm Art"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          disabled={hasError}
        >
          <option value="pie">Torten</option>
          <option value="bar">Balken</option>
        </select>
      </div>
      <hr className="mb-0" />
      {!hasError && !data ? (
        <Spinner />
      ) : hasError ? (
        <Error />
      ) : (
        <div className="row row-cols-2">{items}</div>
      )}
    </React.Fragment>
  );
};
