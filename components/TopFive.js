const HOME_URL =
  "https://wi-project.technikum-wien.at/s20/s20-bvz2-fst-16/wordpress";

const TopFive = () => {
  const [data, setData] = React.useState();
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    fetch(`${HOME_URL}/wp-json/ppg-stats/v1/top-products`)
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

  return !hasError && !data ? (
    <Spinner />
  ) : hasError ? (
    <Error />
  ) : (
    <div className="card shadow-sm mw-100 p-0">
      <div className="card-header text-center fw-bolder">
        Die fünf Produkte mit den besten Durchschnittsbewertungen
      </div>
      <div className="card-body">
        <ChartWrapper label="# Sterne Durchschnitt" data={data} />
      </div>
    </div>
  );
};
