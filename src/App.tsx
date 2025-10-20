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
    if (showLeftSidebar && showRightSidebar) return "col-span-11";
    if (showLeftSidebar && !showRightSidebar) return "col-span-14";
    if (!showLeftSidebar && showRightSidebar) return "col-span-13";
    return "col-span-16";
  };

  return (
    <div className="grid grid-cols-16 min-h-screen">
      {/* Left Sidebar */}
      {showLeftSidebar && (
        <div className="col-span-2 h-screen p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-r-2 border-r-gray-300 dark:border-r-tirtary-text-dark">
          <LeftSideBar />
        </div>
      )}

      {/* Main Content */}
      <div className={clsx(getContentSpan())}>
        <Navbar />
        <Dashborad />
      </div>

      {/* Right Sidebar */}
      {showRightSidebar && (
        <div className="col-span-3 h-screen p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-l-2 border-l-gray-300 dark:border-l-tirtary-text-dark">
          <RightSideBar />
        </div>
      )}
    </div>
  );
}

export default App;