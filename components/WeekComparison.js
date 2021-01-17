const HOME_URL =
  "https://wi-project.technikum-wien.at/s20/s20-bvz2-fst-16/wordpress";

const WeekComparison = () => {
  const [data, setData] = React.useState();
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    fetch(`${HOME_URL}/wp-json/ppg-stats/v1/week-comparison`)
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
    <div className="row row-cols-2">
      <div className="col">
        <div className="card shadow-sm mw-100 p-0">
          <div className="card-header text-center fw-bolder">
            Aktuelle Woche ({moment().startOf("isoWeek").format("LL")} -{" "}
            {moment().endOf("isoWeek").format("LL")})
          </div>
          <div className="card-body">
            <ChartWrapper
              label="Anzahl der Bewertungen"
              type="bar"
              data={
                !!data.currentWeek
                  ? {
                      "5 Sterne": data.currentWeek[4],
                      "4 Sterne": data.currentWeek[3],
                      "3 Sterne": data.currentWeek[2],
                      "2 Sterne": data.currentWeek[1],
                      "1 Stern": data.currentWeek[0],
                    }
                  : null
              }
            />
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm mw-100 p-0">
          <div className="card-header text-center fw-bolder">
            Letzte Woche (
            {moment().subtract(1, "weeks").startOf("isoWeek").format("LL")} -{" "}
            {moment().subtract(1, "weeks").endOf("isoWeek").format("LL")})
          </div>
          <div className="card-body">
            <ChartWrapper
              label="Anzahl der Bewertungen"
              type="bar"
              data={
                !!data.lastWeek
                  ? {
                      "5 Sterne": data.lastWeek[4],
                      "4 Sterne": data.lastWeek[3],
                      "3 Sterne": data.lastWeek[2],
                      "2 Sterne": data.lastWeek[1],
                      "1 Stern": data.lastWeek[0],
                    }
                  : null
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
