const HOME_URL =
  "https://wi-project.technikum-wien.at/s20/s20-bvz2-fst-16/wordpress";

const Products = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [chartType, setChartType] = React.useState("bar");

  const [data, setData] = React.useState();
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    fetch(`${HOME_URL}/wp-json/ppg-stats/v1/product-ratings`)
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
    Object.keys(data)
      .filter((productName) =>
        !searchQuery
          ? true
          : productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((productName) => {
        const ratings = data[productName];

        return (
          <div key={productName} className="col">
            <div className="card shadow-sm mw-100 p-0">
              <div className="card-header text-center fw-bolder">
                {productName}
              </div>
              <div className="card-body">
                <ChartWrapper
                  label="Anzahl der Bewertungen"
                  type={chartType}
                  data={{
                    "5 Sterne": ratings[4],
                    "4 Sterne": ratings[3],
                    "3 Sterne": ratings[2],
                    "2 Sterne": ratings[1],
                    "1 Stern": ratings[0],
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
