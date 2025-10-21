import Dashborad from "./Components/Dashborad/Daborad.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import LeftSideBar from "./Components/Sidebars/LeftSideBar/LeftSideBar.tsx";
import RightSideBar from "./Components/Sidebars/RightSideBar/RightSideBar.tsx";
import { useAtom } from "jotai";
import { showLeftSidebarAtom, showRightSidebarAtom, isDark } from "./store/store.js";
import clsx from "clsx";
import { useEffect } from "react";

function App() {
  const [showLeftSidebar] = useAtom(showLeftSidebarAtom);
  const [showRightSidebar] = useAtom(showRightSidebarAtom);
  const [, setIsDark] = useAtom(isDark)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const getContentSpan = () => {
    if (showLeftSidebar && showRightSidebar) return "lg:col-span-11 col-span-16";
    if (showLeftSidebar && !showRightSidebar) return "lg:col-span-14 col-span-16";
    if (!showLeftSidebar && showRightSidebar) return "lg:col-span-13 col-span-16";
    return "col-span-16";
  };

  return (
    <div className="relative lg:static grid grid-cols-16 h-full min-h-screen bg-primary-bg-light dark:bg-primary-bg-dark">

      {showLeftSidebar && (
        <div className="absolute z-7 lg:static lg:col-span-2 h-full p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-r-2 border-r-gray-300 dark:border-r-tirtary-text-dark">
          <LeftSideBar />
        </div>
      )}

      <div className={clsx(getContentSpan())}>
        <Navbar />
        <Dashborad />
      </div>

      {showRightSidebar && (
        <div className=" absolute right-0  z-7 lg:right-auto lg:static lg:col-span-3 h-full p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-l-2 border-l-gray-300 dark:border-l-tirtary-text-dark">
          <RightSideBar />
        </div>
      )}
    </div>
  );
}

export default App;