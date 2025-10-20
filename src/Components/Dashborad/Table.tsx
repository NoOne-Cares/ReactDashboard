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
        <div className="w-full overflow-x-auto bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl p-8 ">
            <div className="font-semibold px-4 pb-4 text-primary-text-light dark:text-primary-text-dark">
                Top Selling Products
            </div>
            <div className="grid grid-cols-5 gap-4 px-4 pb-4 text-secondry-text-light dark:text-secondry-text-dark border-b-gray-300 border-b-2 dark:border-b-tirtary-text-dark">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </div>

            {/* Rows */}
            {salesData.map((item, index) => (
                <div
                    key={item.name + index}
                    className="grid grid-cols-5 gap-4 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm"
                >
                    <div className="col-span-2 text-gray-800 dark:text-white">{item.name}</div>
                    <div className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.quantity}</div>
                    <div className="text-gray-800 dark:text-gray-200 font-semibold">${item.amount.toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductSalesList;
