import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";

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
    <button className="outline outline-2 outline-primary dark:outline-accentwhite  p-2 rounded-full">
       <DarkModeSwitch 
                moonColor="#FCFBFC"
                sunColor="#00a6fb"
                checked={darkMode}
                onChange={toggleDarkMode}
                size={18}
            />
    </button>
  );
}

export default DarkMode;
