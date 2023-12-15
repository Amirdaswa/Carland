
const Carview = () => {
  return (
    
      <div className="h-full">
        <div className="carview  " >
          <div className="carview__card grid grid-cols-2 mt-16 mr-8 ml-8 bg-gray-200 h-192 ">
            <div className=""><img src="./src/images/peakpx.jpg" alt="" className="carview__image rounded h-full w-full  " /></div>
            <div className="carview__information">
              <header className="carview__title">
                <h1 className="carview__name">Maybach 2020</h1>
                <h3 className="carview__brand"> MERCEDES BENZ</h3>
              </header>
            </div>
          </div>
        </div>
      </div>
     


  )
}

export default Carview