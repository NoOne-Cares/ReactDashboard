import Favourate from "./Favourate"
import LeftDashBorad from "./LeftDashBorad"
import Pages from "./Pages"
import Profile from "./Profile"
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "../../../store/store.ts";
const LeftSideBar = () => {
    const [leftSidePannel, setLeftPannel] = useAtom(showLeftSidebarAtom)
    return (
        <div className=" relative bg-primary-bg-light dark:bg-primary-bg-dark z-4" onClick={() => leftSidePannel ? setLeftPannel(!leftSidePannel) : () => { }}>
            <Profile />
            <Favourate />
            <LeftDashBorad />
            <Pages />
        </div>
    )
}

export default LeftSideBar