import { useState } from "react"


const Navbar = () => {
  const [sb,setSb]= useState(false);
  

  const closeSB = (sb:boolean) =>{
    if(!sb){
      return (
        <img onClick={()=>{setSb(true),console.log(sb)}} className="search__icon w-8 h-8 hover:cursor-pointer ml-auto mr-auto " src="./src/images/icons8-search-50.png" alt="" />
      )
    }
    else{
      return (

        <img onClick={()=>{setSb(false),console.log(sb)}} className="close__icon mr-px w-8 h-8 hover:cursor-pointer" src="./src/images/icons8-close-50.png"  alt="" />
      )
    }
  }
  const SB = (sb:boolean)=>{
    if(sb===true){
      return (
        
          <nav className="sb__contaier flex w-full justify-center fixed  ">
            <div className="sb flex w-3/5 m-auto border border-solid border-slate-300  rounded-md ">
              <input type="text" placeholder="Search For Cars" className="sb__input  focus:outline-none
              rounded-md border border-solid border-slate-200 rounded-r-none p-2 w-11/12 bg-slate-100 " />
               <button className="sb__button bg-red-400 w-1/12 rounded-md flex justify-center items-center"><img className="search__icon w-7 h-7" src="./src/images/icons8-search-50.png" alt="" /></button>
            </div>
          </nav>
      
        )
      }
      else{
        return(
        <input type="text" placeholder="Search For Cars" className="sb  focus:outline-none mr-2 invisible
         rounded border transition-opacity duration-500 border-solid border-slate-200 p-2 w-10/12" />

      )
    }
  }
  return (
    
    <>
    <nav className="navbar items-center flex justify-between p-3 w-screen bg-slate-50 shadow h-16 ">
        <div className="navbar__content w-2/4 flex items-center ">
          
          <div className="navbar__items   ml-7px mr-10">
              <ul className="navbar__items__list w-3/5 mr-10 flex ">
                <li className="navbar__item mr-10 hover:text-red-600 whitespace-nowrap"><a href="#" className="items__link">Sell Car</a></li>
                <li className="navbar__item mr-10 hover:text-red-600 whitespace-nowrap"><a href="#" className="items__link">Cars</a></li>
                <li className="navbar__item mr-10 hover:text-red-600 whitespace-nowrap"><a href="#" className="items__link">Sign Up</a></li>
              </ul>
          </div>
        </div>

        <div className="navbar__sb flex w-2/4 justify-end w-9/12">
          
            <ul className="navbar__items__list flex items-center">
              {closeSB(sb)}
            </ul>
        </div>
    </nav>    
    <div className="sb">
      {SB(sb)}
    </div>
    
    </>

  )
}

export default Navbar;