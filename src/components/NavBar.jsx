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
    <nav className="navbar d-flex justify-content-between align-items-center p-3"
    style={{ backgroundColor: "#FFECDA" }}>
    
        <h1 className="fw-bold"
        style={{color: "#E13636"}}>melon</h1>
        <img src="./melon-icon.svg" alt="Melon Logo" className="logo" />
    </nav>

 </div> 
    )
}