import { OrderListData } from '../../assets/data/OrderListData';

const OrderList = () => {
    return (
        <div className="w-full overflow-x-auto bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl p-8 m-10">
            <div>
                <div className="grid grid-cols-8 gap-4 font-semibold text-gray-700 dark:text-gray-200 px-4 py-2 border-b bg-gray-100 dark:bg-gray-800">
                    <div></div>
                    <div>Code</div>
                    <div>Image</div>
                    <div>Name</div>
                    <div>Project</div>
                    <div>Location</div>
                    <div>Time</div>
                    <div>Status</div>
                </div>

                {/* Data Rows */}
                {OrderListData.map((order, index) => (
                    <div
                        key={order.code + index}
                        className="grid grid-cols-8  items-center px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 "
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

                        <div
                            className={`
                            text-sm font-medium px-2 py-1 rounded text-center
                            ${order.status.toLowerCase() === 'in progress'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : order.status.toLowerCase() === 'complete'
                                        ? 'bg-green-100 text-green-800'
                                        : order.status.toLowerCase() === 'rejected'
                                            ? 'bg-red-100 text-red-800'
                                            : 'bg-gray-100 text-gray-600'
                                }
                        `}
                        >
                            {order.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
