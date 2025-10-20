import { RightArrow } from "../../../assets"
import { PagesData } from "../../../assets/data/PagesData"

const Pages = () => {
    return (
        <div className=" pt-4">
            <div className="pl-4 text-secondry-text-light dark:text-secondry-text-dark">
                Pages
            </div>
            {
                PagesData.map(item =>
                    <>
                        <div id={item.name} className="pl-2 py-1 flex gap-1 items-center">
                            <RightArrow />
                            <div>
                                {item.icon}
                            </div>
                            <div className="text-primary-text-light dark:text-primary-text-dark">
                                {item.name}
                            </div>

                        </div>
                        {item.subPage.length > 0 ?
                            item.subPage.map(item =>
                                <div id={item.name} className="pl-14 py-1 text-primary-text-light dark:text-primary-text-dark">
                                    {item.name}
                                </div >

                            )
                            :
                            <></>
                        }
                    </>
                )
            }
        </div >
    )
}

export default Pages