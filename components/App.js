const App = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <div className="container mt-4 mb-5">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link${tab === 0 ? " active" : ""}`}
            onClick={() => setTab(0)}
          >
            Top 5 Produkte
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link${tab === 1 ? " active" : ""}`}
            onClick={() => setTab(1)}
          >
            Detailansicht
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link${tab === 2 ? " active" : ""}`}
            onClick={() => setTab(2)}
          >
            Wochenvergleich
          </a>
        </li>
      </ul>

      {tab === 0 ? (
        <TopFive />
      ) : tab === 1 ? (
        <Products />
      ) : tab === 2 ? (
        <WeekComparison />
      ) : undefined}
    </div>
  );
};
