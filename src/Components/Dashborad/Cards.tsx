import DarkRiseIcon from "../../assets/DarkRiseIcon"
import FallIcon from "../../assets/FallIcon"
import RaiseIcon from "../../assets/RaiseIcon"

const Cards = () => {
    return (
        <div className="h-full w-full">
            <div className="flex justify-between gap-4">
                <div className="w-full bg-[#e3f5ff] p-4 rounded-2xl">
                    <div className="font-bold text-xl">
                        Customers
                    </div>
                    <div className="group flex items-center justify-between mt-2">
                        <div className="flex w-full items-center justify-between">
                            <div className="order-1 group-hover:order-2 transition-all duration-300 text-4xl font-bold">
                                3,718
                            </div>
                            <div className="order-2 group-hover:order-1 transition-all duration-300 flex items-center text-sm font-medium space-x-1">
                                <div >+11.01%</div>
                                <DarkRiseIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#f7f9fb] dark:bg-[#272727] p-4 rounded-2xl text-primary-text-light dark:text-primary-text-dark">
                    <div className="font-bold text-xl">
                        Orders
                    </div>
                    <div className="group flex items-center justify-between mt-2">
                        <div className="flex w-full items-center justify-between">
                            <div className="order-1 group-hover:order-2 transition-all duration-300 text-4xl font-bold ">
                                1,219
                            </div>

                            <div className="order-2 group-hover:order-1 transition-all duration-300 flex items-center text-sm font-medium space-x-1">
                                <div className="text-primary-text-light dark:text-primary-text-dark">-0.03%</div>
                                <FallIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">

                <div className="w-full bg-[#f7f9fb] dark:bg-[#272727] p-4 rounded-2xl text-primary-text-light dark:text-primary-text-dark">
                    <div className="font-bold text-xl">
                        Revenue
                    </div>
                    <div className="group flex items-center justify-between mt-2">
                        <div className="flex w-full items-center justify-between">
                            <div className="order-1 group-hover:order-2 transition-all duration-300 text-4xl font-bold ">
                                $365
                            </div>

                            <div className="order-2 group-hover:order-1 transition-all duration-300 flex items-center text-sm font-medium space-x-1">
                                <div className="text-primary-text-light dark:text-primary-text-dark">15.03%</div>
                                <RaiseIcon />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#e3f5ff] p-4 rounded-2xl">
                    <div className="font-bold text-xl">
                        Growth
                    </div>
                    <div className="group flex items-center justify-between mt-2">
                        <div className="flex w-full items-center justify-between">
                            <div className="order-1 group-hover:order-2 transition-all duration-300 text-4xl font-bold">
                                30.1%
                            </div>
                            <div className="order-2 group-hover:order-1 transition-all duration-300 flex items-center text-sm font-medium space-x-1">
                                <div >+6.08%</div>
                                <DarkRiseIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards