import {
    Sun, Clock, Bell, RightNavButton,
    Start, Comand,
    SearchIcon
} from "../../assets"
import { useAtom } from "jotai";
import { showLeftSidebarAtom, showRightSidebarAtom, isDark, shwoOrder } from "../../store/store.ts";




const Navbar = () => {

    const [, setShowLeftSidebar] = useAtom(showLeftSidebarAtom);
    const [, setShowRightSidebar] = useAtom(showRightSidebarAtom);
    const [, setIsDark] = useAtom(isDark)
    const [, setShowOrders] = useAtom(shwoOrder)

    function changeTheme() {
        const isNowDark = document.documentElement.classList.toggle("dark");
        const newTheme = isNowDark ? "dark" : "light";

        localStorage.setItem("theme", newTheme);
        setIsDark(isNowDark);
    }

    function chnageShoeOrder() {
        setShowOrders(prev => !prev)
    }

    return (
        <>

            <div className="flex justify-between bg-primary-bg-light sm:bg-pink-700 md:bg-amber-200 lg:bg-amber-900 dark:bg-primary-bg-dark p-2 align-middle py-3 border-b-gray-300 border-b-2 dark:border-b-tirtary-text-dark">
                <div className="flex gap-2 items-center">
                    <div onClick={() => setShowLeftSidebar(prev => !prev)}>
                        <RightNavButton />
                    </div>

                    <Start />
                    <p className="text-secondry-text-light dark:text-secondary-bg-dark">Dashboard</p>
                    <p className="text-secondry-text-light dark:text-secondary-bg-dark">/</p>
                    <p className="text-primary-text-light dark:text-primary-text-dark">Default</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="md:flex rounded-md bg-secondary-bg-light dark:bg-secondary-bg-dark items-center p-1 px-2 hidden">
                        <SearchIcon />
                        <input type="text" placeholder="Search" className="px-1 dark:placeholder-secondary-bg-dark"></input>
                        <Comand />
                    </div>
                    <div className="flex gap-2">
                        <div onClick={changeTheme} >
                            <Sun />
                        </div>
                        <Clock />
                        <div onClick={chnageShoeOrder}>
                            <Bell />
                        </div>

                        <div onClick={() => setShowRightSidebar(prev => !prev)}>
                            <RightNavButton />
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar