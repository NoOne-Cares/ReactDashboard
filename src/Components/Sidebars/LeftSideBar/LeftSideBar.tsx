import Favourate from "./Favourate"
import LeftDashBorad from "./LeftDashBorad"
import Pages from "./Pages"
import Profile from "./Profile"

const LeftSideBar = () => {
    return (
        <div className="bg-primary-bg-light dark:bg-primary-bg-dark">
            <Profile />
            <Favourate />
            <LeftDashBorad />
            <Pages />
        </div>
    )
}

export default LeftSideBar