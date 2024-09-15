

const Navbar = () => {
  return (
      <div>
          <nav  className="z-10 flex px-7 py-3  w-full  screen-max-width justify-between shadow-2xl items-center fixed bg-gray-900">
              <div id="logo" className="">
                  <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">Codelogy_dev</h1>
              </div>
              <div className="navlinks ">
                  <ul className="flex gap-5 text-blue- font-bold text-xl ">
                      <li><a href="" className="hover:text-blue-600">Home </a></li>
                      <li><a href="" className="hover:text-blue-600"> About Me</a></li>
                      <li><a href="" className="hover:text-blue-600">Experts</a></li>
                      <li><a href="" className="hover:text-blue-600">Projects</a></li>
                      <li><a href="" className="hover:text-blue-600">Contact</a></li>
                      <li><a href="" className="hover:text-blue-600"> BMAC</a></li>
                  </ul>
              </div>
              
                  <button className="btns "><p className="text-blue-600">=</p></button>
             
          </nav>
      </div>
  )
}

export default Navbar