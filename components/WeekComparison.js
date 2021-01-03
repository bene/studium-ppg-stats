const WeekComparison = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    // TODO: Get data
    setData({
      currentWeek: [3, 1, 4, 6, 3],
      lastWeek: [3, 1, 4, 6, 3],
    });
  }, [setData]);

  return (
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
