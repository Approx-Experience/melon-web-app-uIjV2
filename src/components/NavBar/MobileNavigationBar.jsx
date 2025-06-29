import "./MobileNavigationBar.css";
import { useState } from "react";


export default function NavBar() {
const [search, setSearch] = useState(false);


  function clickHandler() {
      console.log("Clicked");
      setSearch(!search);
  }

  return (

    <div>
      <nav className="navbar d-flex flex-column pt-3 px-4 background-color">
        <div className="d-flex flex-row justify-content-between align-items-center w-100">
          <div className="d-flex flex-column">
            <h1 className="fw-bold fs-6 text-color">melon</h1>
            <a href="/">
              <img src="./melon-icon.svg" alt="Melon Logo" className="logo" />
            </a>
          </div>

          <div>
            <div className="d-flex flex-row  fw-bold font-14 align-items-center mx- gap-4">
              <img
                src="./search.svg"
                className="search-icon"
                alt="Search icon"
                onClick={clickHandler}
              />
              {search && (
  <div className="d-flex align-items-center search-open">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input background-color w-100 border-0"
                />
                <img src="./close.svg" alt="Close icon" className="close-icon" onClick={clickHandler} />
               </div>
              )}

              {!search && (
                <div className="icons">
         <div>
                {" "}
                <img src="./account.svg" alt="Account icon"></img>{" "}
              </div>
              <div>
                {" "}
                <img src="./favorite.svg" alt="Favorites icon"></img>
              </div>
              <div>
                {" "}
                <img src="./cart.svg" alt="Cart icon"></img> 0
              </div>
              <div>
                <img src="./menu.svg" alt="Menu icon"></img>
              </div>
              </div>  
              )}
              
          
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
