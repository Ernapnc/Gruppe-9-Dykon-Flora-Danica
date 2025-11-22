//define default colors i css
/* :root {
--background-color: #xxx;
--color: #xx;
}
.dark-theme {
--background-color: #xxx;
--color: #xx;
}
*{transistion: 0.3s;}
*/
import { useEffect, useState } from "react"



const LysKnap = () => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(true);

    useEffect (() => {
        let theme = localStorage.getItem("theme");
        if (theme === "Dark") {
            setDarkTheme(true);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("theme", isDarkTheme ? "Dark" : "Default");
        document.body.classList.toggle("dark-theme");
        }, [isDarkTheme]
    );
//når den er true, så vil den tænde for darkmode, hvis falsk vil den slukke. 
    function lysVærdi() {
        setDarkTheme(!isDarkTheme);
    }
    return <>
    <label>
        <input type="checkbox" checked={isDarkTheme} onClick={lysVærdi} />
        <span>Dark Mode</span>
    </label>
    </>
}

export default LysKnap; 