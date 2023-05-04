/* eslint-disable jsx-a11y/anchor-is-valid*/
// <!-- ************************** -->
// <!-- Bonus! Use documentation to style the nav -->
// <!-- ************************** -->

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Rosier</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Featured</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" aria-labelledby="navbarDropdown">
                <li>
                  <a className="nav-link">About</a>
                </li>
                <li>
                  <a className="nav-link">Contact</a>
                </li>
                <li>
                  <hr className="nav-link" />
                </li>
                <li>
                  <a className="nav-link">Surprise me!</a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
