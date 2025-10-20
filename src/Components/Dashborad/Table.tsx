const salesData = [
    {
        name: "ASOS Ridley High Waist",
        price: 79.49,
        quantity: 82,
        amount: 6518.18,
    },
    {
        name: "Marco Lightweight Shirt",
        price: 128.5,
        quantity: 37,
        amount: 4754.5,
    },
    {
        name: "Half Sleeve Shirt",
        price: 39.99,
        quantity: 64,
        amount: 2559.36,
    },
    {
        name: "Lightweight Jacket",
        price: 20.0,
        quantity: 184,
        amount: 3680.0,
    },
    {
        name: "Marco Shoes",
        price: 79.49,
        quantity: 64,
        amount: 1965.81,
    },
];

const ProductSalesList = () => {
    return (
        <div className="w-full overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700 dark:text-gray-200 px-4 py-2  bg-gray-100 dark:bg-gray-800">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </div>

            {/* Rows */}
            {salesData.map((item, index) => (
                <div
                    key={item.name + index}
                    className="grid grid-cols-4 gap-4 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm"
                >
                    <div className="font-medium text-gray-800 dark:text-white">{item.name}</div>
                    <div className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.quantity}</div>
                    <div className="text-gray-800 dark:text-gray-200 font-semibold">${item.amount.toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductSalesList;
