import Activities from "./Activities"
import Contact from "./Contact"
import Notification from "./Notification"
const RightSideBar = () => {
    return (
        <div className="p-2">
            <Notification />
            <Activities />
            <Contact />
        </div>
    )
}

export default RightSideBar