const App = () => {
  const [tab, setTab] = React.useState(
    window.location.hash === "#products"
      ? 1
      : window.location.hash === "#week-comparison"
      ? 2
      : 0
  );

  return (
    <div className="container mt-4 mb-5">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            href="#top"
            className={`nav-link ${
              tab === 0 ? "active bg-secondary" : "text-secondary"
            }`}
            onClick={() => setTab(0)}
          >
            Top 5 Produkte
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#products"
            className={`nav-link ${
              tab === 1 ? "active bg-secondary" : "text-secondary"
            }`}
            onClick={() => setTab(1)}
          >
            Detailansicht
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#week-comparison"
            className={`nav-link ${
              tab === 2 ? "active bg-secondary" : "text-secondary"
            }`}
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

      <hr />

      <div className="d-flex justify-content-between">
        <p>&copy; 2021</p>
        <p>Personalized Photo Gifts</p>
      </div>
    </div>
  );
};
