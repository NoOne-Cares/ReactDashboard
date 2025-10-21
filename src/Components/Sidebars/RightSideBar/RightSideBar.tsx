import Activities from "./Activities"
import Contact from "./Contact"
import Notification from "./Notification"
import { useAtom } from "jotai";
import { showRightSidebarAtom } from "../../../store/store.ts";
const RightSideBar = () => {
    const [rightSidePannle, setPannel] = useAtom(showRightSidebarAtom)
    return (
        <div className="p-2" onClick={() => rightSidePannle ? setPannel(!rightSidePannle) : () => { }}>
            <Notification />
            <Activities />
            <Contact />
        </div>
    )
}

export default RightSideBar