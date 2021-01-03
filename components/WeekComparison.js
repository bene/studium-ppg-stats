const WeekComparison = () => {
  const [data, setData] = React.useState({});
  const chartCurrentWeek = React.useRef(null);
  const chartLastWeek = React.useRef(null);

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
    <div className="row row-cols-2">
      <div className="col">
        <div className="card shadow-sm mw-100 p-0">
          <div className="card-header text-center fw-bolder">
            Aktuelle Woche ({moment().startOf("isoWeek").format("LL")} -{" "}
            {moment().endOf("isoWeek").format("LL")})
          </div>
          <div className="card-body">
            <canvas ref={chartCurrentWeek} width="400" height="200"></canvas>
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
            <canvas ref={chartLastWeek} width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};
