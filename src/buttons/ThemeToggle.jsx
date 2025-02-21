import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeProvider";
import { Sun, Moon } from "lucide-react"; // Ensure Lucide is installed

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md text-gray-800 dark:text-white cursor-pointer">
    {theme === "light" ? <Moon color="black" size={20} /> : <Sun size={20} />}
  </button>
  );
};

export default ThemeToggle;
