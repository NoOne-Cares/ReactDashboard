const Favourate = () => {
    return (
        <div className="pt-2">
            <div className="flex gap-4 justify-center">
                <p className="text-secondry-text-light dark:text-secondry-text-dark">Favorites</p>
                <p className="text-tirtary-text-light dark:text-tirtary-text-dark">Recently</p>
            </div>
            <div className="pt-1">
                <div className="flex pl-5 gap-2 items-center">
                    <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                    <div className="dark:text-primary-text-dark">Overview</div>
                </div>
                <div className="flex pl-5 gap-2 items-center">
                    <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                    <div className="dark:text-primary-text-dark">Projects</div>
                </div>
            </div>
        </div>

    )
}

export default Favourate