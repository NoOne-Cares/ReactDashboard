import BarChart from "./BarChart"
import Cards from "./Cards"
import DonutChart from "./DonutChats"
import LineCharts from "./LineChar"
import MapCharts from "./MapChart"
import OrderList from "./OrderList"
import ProductSalesList from "./Table"
import { useAtom } from "jotai";
import { shwoOrder } from "../../store/store.ts";

const Dashborad = () => {
    const [showOrders] = useAtom(shwoOrder)
    return (
        <div className="h-fit dark:bg-primary-bg-dark p-6" >


            {
                showOrders ?

                    <>
                        <p className="pb-4 text-primary-text-light dark:text-primary-text-dark">eCommerce</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4">
                            <div className="col-span-2">
                                <Cards />
                            </div>
                            <div className="col-span-2 mt-4 h-90 lg:h-auto lg:mt-0">
                                <BarChart />
                            </div>
                            <div className="col-span-3 h-90 mt-4 lg:col-span-3 lg:mt-0">
                                <LineCharts />
                            </div>
                            <div className="hidden lg:block mt-4 lg:col-span-1 lg:h-90 lg:mt-0 ">
                                <MapCharts />
                            </div>
                            <div className="col-span-3 mt-4"> <ProductSalesList /></div>
                            <div className="block lg:hidden col-span-2 sm:col-span-1 h-120 mt-3 sm:mr-2 lg:mr-0 ">
                                <MapCharts />
                            </div>
                            <div className="mt-3 col-span-2 sm:col-span-1 lg:mt-0 sm:ml-2 lg:ml-0">
                                <DonutChart />
                            </div>

                        </div>
                    </> : <OrderList />

            }
        </div>
    )
}

export default Dashborad