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
    const [isDarkTheme, setDarkTheme] = useState<boolean>(() => {
        try {
            return localStorage.getItem("theme") === "Dark";
        } catch {
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem("theme", isDarkTheme ? "Dark" : "Default");
        document.body.classList.toggle("dark-theme", isDarkTheme);
        }, [isDarkTheme]
    );
//når den er true, så vil den tænde for darkmode, hvis falsk vil den slukke. 
    function lysVærdi() {
        setDarkTheme(!isDarkTheme);
    };
    return (
        <div className="dark-toggle">
            <label>
                <input type="checkbox" checked={isDarkTheme} onChange={lysVærdi} />
                <span>Dark Mode</span>
            </label>
        </div>
    );
}

export default LysKnap; 