import { SearchIcon } from '../../assets';
import AddIcon from '../../assets/AddIcon';
import { OrderListData } from '../../assets/data/OrderListData';
import FilterIcon from '../../assets/FilterIcon';
import SortIcon from '../../assets/SortIcon';

const OrderList = () => {
    return (
        <div className="w-full overflow-x-auto">
            <div className='font-semibold text-primary-text-light dark:text-primary-text-dark'> Order List</div>
            <div className='flex justify-between bg-[#f7f9fb] dark:bg-[#272727] p-2 rounded-xl items-center'>
                <div className='flex gap-2'>
                    <AddIcon />
                    <FilterIcon />
                    <SortIcon />
                </div>
                <div className='flex items-center p-0.5 gap-2 bg-[#fafbfd] border-2 border-[#e4e5e7] rounded-xl dark:bg-[#232323] dark:border-[#393939]'>
                    <SearchIcon />
                    <input type="text" placeholder='Serach' className='placeholder:dark:text-secondry-text-dark' />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-8 gap-4  text-gray-700 dark:text-[#858585] px-4 py-2 border-b mt-5 ">
                    <div>Order Id</div>
                    <div>Code</div>
                    <div>Image</div>
                    <div>Name</div>
                    <div>Project</div>
                    <div>Location</div>
                    <div>Time</div>
                    <div>Status</div>
                </div>
                {OrderListData.map((order, index) => (
                    <div
                        key={order.code + index}
                        className="grid grid-cols-8  items-center px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 border-b-gray-300 border-b-1 dark:border-b-tirtary-text-dark"
                    >
                        <input type="checkbox" className="h-4 w-4" />

                        <div className="text-sm text-gray-600 dark:text-gray-300">
                            {order.code}
                        </div>

                        <div>
                            {order.img && (
                                <img
                                    src={order.img}
                                    alt={`${order.name}'s avatar`}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            )}
                        </div>

                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                            {order.name}
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-300">
                            {order.project}
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-300">
                            {order.location}
                        </div>

                        <div className="text-xs text-gray-400">
                            {order.time}
                        </div>

                        <div className='flex items-center gap-2'>
                            <div
                                className={`
                            w-2 h-2 rounded-full  text-center
                            ${order.status.toLowerCase() === 'in progress'
                                        ? 'bg-yellow-800'
                                        : order.status.toLowerCase() === 'complete'
                                            ? 'bg-green-800 '
                                            : order.status.toLowerCase() === 'rejected'
                                                ? 'bg-red-800 '
                                                : 'bg-gray-600'
                                    }
                        `}
                            >
                            </div>
                            <div
                                className={`
                            text-sm font-medium py-1 rounded text-center
                            ${order.status.toLowerCase() === 'in progress'
                                        ? ' text-yellow-800'
                                        : order.status.toLowerCase() === 'complete'
                                            ? ' text-green-800'
                                            : order.status.toLowerCase() === 'rejected'
                                                ? ' text-red-800'
                                                : ' text-gray-600'
                                    }
                        `}
                            >
                                {order.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
