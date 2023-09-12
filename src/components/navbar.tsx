

const Navbar = () => {
  return (
    <nav className="navbar items-center flex justify-between p-3 w-full bg-slate-50 shadow h-16">
        <div className="navbar__logo w-14 h-14">
          <img className="w-full h-full" src="./src/images/carland-low-resolution-logo-color-on-transparent-background.png" alt="" />
        </div>
        <div className="navbar__content">
            <ul className="navbar__items__list flex items-center gap-12">
              <img className="search__icon w-9 h-9" src="./src/images/icons8-search-50.png" alt="" />
              <img className="menu__icon mr-px w-9 h-9" src="./src/images/icons8-menu-50.png"  alt="" />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar 