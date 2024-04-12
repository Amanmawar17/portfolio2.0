import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";
// import { RiSunLine } from "react-icons/ri";
// import { BsMoonStars } from "react-icons/bs";

function DarkMode() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    );
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };
  return (
    <button className="outline outline-2 outline-primary p-2 rounded-full">
       <DarkModeSwitch 
                moonColor="#00a6fb"
                sunColor="#00a6fb"
                checked={darkMode}
                onChange={toggleDarkMode}
                size={18}
            />
    </button>
  );
}

export default DarkMode;
