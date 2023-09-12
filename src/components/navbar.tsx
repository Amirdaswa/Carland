import { useState } from "react"


const Navbar = () => {
  const [sb,setSb]= useState(false);
  const closeSB = (sb:boolean) =>{
    if(!sb){
      return (
        <img onClick={()=>{setSb(true),console.log(sb)}} className="search__icon w-8 h-8 hover:cursor-pointer" src="./src/images/icons8-search-50.png" alt="" />
      )
    }
    else{
      return (

        <img onClick={()=>setSb(false)} className="close__icon mr-px w-8 h-8 hover:cursor-pointer" src="./src/images/icons8-close-50.png"  alt="" />
      )
    }
  }
  const SB = (sb:boolean)=>{
    if(sb){
      return (
        <input type="text" placeholder="Search For Cars" className="sb focus:outline-none mr-2 rounded border border-solid border-slate-200 p-2 w-10/12" />
        )
      }
    else{
      return(
        <h1></h1>
      )
    }
  }
  return (
    <nav className="navbar items-center flex justify-between p-3 w-full bg-slate-50 shadow h-16">
        <div className="navbar__logo w-14 h-14">
          <img className="w-full h-full" src="./src/images/carland-low-resolution-logo-color-on-transparent-background.png" alt="" />
        </div>
        <div className="navbar__content flex w-2/4 justify-end">
          
        {SB(sb)}
            <ul className="navbar__items__list flex items-center gap-12">
              {closeSB(sb)}
              <img className="menu__icon mr-px w-8 h-8 hover:cursor-pointer" src="./src/images/icons8-menu-50.png"  alt="" />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar 