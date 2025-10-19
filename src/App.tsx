import Dashborad from "./Components/Dashborad/Daborad.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import LeftSideBar from "./Components/Sidebars/LeftSideBar/LeftSideBar.tsx";
import RightSideBar from "./Components/Sidebars/RightSideBar/RightSideBar.tsx";
// import { useAtom } from "jotai";
// import { showLeftSidebarAtom, showRightSidebarAtom } from "./store/store.js";

function App() {
  // const [showLeftSidebar, setShowLeftSidebar] = useAtom(showLeftSidebarAtom);
  // const [showRightSidebar, setShowRightSidebar] = useAtom(showRightSidebarAtom);

  return (
    <div className="grid grid-cols-8">
      <div className="h-screen p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-r-gray-300 border-r-2 dark:border-r-tirtary-text-dark">
        <LeftSideBar />
      </div>

      <div className="col-span-6">
        <Navbar />
        <Dashborad />
      </div>
      <RightSideBar />

    </div>
  );
}

export default App;
