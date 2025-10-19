import { RightArrow } from "../../../assets"
import { LeftDasBordData } from "../../../assets/data/DashBorad"

const LeftDashBorad = () => {
    return (
        <div className=" pt-4">
            <div className="pl-4 text-secondry-text-light dark:text-secondry-text-dark">
                Dashbord
            </div>
            {
                LeftDasBordData.map(items => {
                    return (
                        <div id={items.name} className="flex pl-2 items-center gap-1 py-1">
                            <RightArrow />
                            <div>
                                {items.icon}
                            </div>
                            <div className="text-primary-text-light dark:text-primary-text-dark">
                                {items.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftDashBorad