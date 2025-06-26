//Logo should be a link to the homepage.

//Search bar does not need functionality yet.

//The icons should be for login/account, favorites and cart.

//The links should include new arrivals, men, women, accessories, shoes and sale.

//uses search.svg, account.svg, heart.svg, cart.svg from assets/icons 

//Favorite Button BG	#FEEBEB
//Navigation/Accent BG	#FFECDA
//Logo/Accent Text	#E13636


export default function NavBar() {
    return (
 <div>
    <nav className="navbar d-flex flex-column p-3"
    style={{ backgroundColor: "#FFECDA" }}>
    
    <div className="d-flex flex-row gap-4">
        
        <h1 className="fw-bold"
        style={{color: "#E13636"}}>melon</h1>
        <img src="./melon-icon.svg" alt="Melon Logo" className="logo" />
        </div>

        <div>
        <input className="w-100 px-5"
        placeholder="Find your next fit"
        ></input>
    </div>

        <div>
            <p> account </p>
            <p> favorites</p>
            <p>cart</p>
        </div>

        <div className="d-flex justify-content-between w-50">
        <p>new arrivals</p>
         <p>men</p>
          <p>women</p>
           <p>accessories</p>
            <p>shoes</p>
             <p>sales</p>
             </div>
    </nav>

 </div> 
    )
}