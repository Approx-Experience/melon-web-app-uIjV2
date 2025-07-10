import "./NavigationBar.css";
// import { MemoryRouter } from "react-router-dom";
export default function NavigationBar() {
  return (
    // <MemoryRouter>
    <div>
      <nav
        className="navbar d-flex flex-column pt-5 px-4 background-color"
      >
        <div className="d-flex flex-row justify-content-between align-items-center mb-3 w-100">
          <div className="d-flex flex-row  gap-2">
            <h1 className="fw-bold fs-4 mx-2 text-color">
              melon
            </h1>
            <a href="/">
              <img src="./melon-icon.svg" alt="Melon Logo" className="logo" />
            </a>
          </div>

          <div className="position-relative">
            <img
              src="./search.svg"
              className="position-absolute start-0 top-50 translate-middle-y search-icon"
              alt="Search icon"
            />

            <input
              className="px-5 py-1 rounded-1 border-1 input-style"
              type="text"
              id="search"
              name="search"
              aria-label="Search"
              placeholder="Find your next fit"></input>
          </div>

          <div className="d-flex flex-row gap-3 fw-bold font-14">
            <div>
              {" "}
              <img src="./account.svg" alt="Account icon"></img> account{" "}
            </div>
            <div>
              {" "}
              <img src="./favorite.svg" alt="Favorites icon"></img> favorites
            </div>
            <div className="fw-normal">
              {" "}
              <img src="./cart.svg" alt="Cart icon"></img> 0
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-around fw-bold font-1 menu-items-style"
        >
          <p>new arrivals</p>
          <p>men</p>
          <p>women</p>
          <p>accessories</p>
          <p>shoes</p>
          <p>sale</p>
        </div>
      </nav>
    </div>
    // </MemoryRouter>
  );
}
