import React from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'

const Darkmode = () => {
    const [theme, SetTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem 
        ("theme") : "light"

    );

    const element = document.documentElement ;  /* html elemnt */

    React.useEffect(() =>{

        if (theme == "dark") {


element.classList.add("dark");
localStorage.setItem("theme", "dark");
        } else {



element.classList.remove("dark")
localStorage.setItem("theme", "light");
        }
    }, [theme]  );


        






    
  return (
    <div className="relative">

<img src={LightButton} alt="" onClick={() => SetTheme(theme == "light" ? "dark" : "light")

} className={`w-12 cursor-pointer drop-shadow-lg hover:drop-shadow-[1px_1px_1px_ rgba(0,0,0)] transition-all duration-300 absolute right-0 z-10 ${ theme == "dark" ? "opacity-0" : "opacity-100" } `}     />



<img src={DarkButton} alt="" onClick={() => SetTheme(theme == "light" ? "dark" : "light")

} className="w-12 cursor-pointer drop-shadow-lg hover:drop-shadow-[1px_1px_1px_ rgba(0,0,0)] transition-all duration-300" /> 
    </div>
  )
}

export default Darkmode