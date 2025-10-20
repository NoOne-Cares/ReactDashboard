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
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2">
                                <Cards />
                            </div>
                            <div className="col-span-2">
                                <BarChart />
                            </div>
                            <div className="col-span-3 h-90">
                                <LineCharts />
                            </div>
                            <div className="col-span-1">
                                <MapCharts />
                            </div>
                            <div className="col-span-3"> <ProductSalesList /></div>
                            <div>
                                <DonutChart />
                            </div>

                        </div>
                    </> :
                    <>
                        <OrderList />
                    </>
            }
        </div>
    )
}

export default Dashborad