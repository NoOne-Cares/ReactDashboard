import { NotificationData } from '../../../assets/data/NotificationData'

const Notification = () => {
    return (
        <div>
            <div className='font-medium text-primary-text-light dark:text-primary-text-dark'>
                Notification
            </div>
            <div className='py-2'>
                {
                    NotificationData.map(item =>
                        <div id={item.msg} className='py-2 relative'>
                            <div className='flex items-center gap-2'>
                                <div>{item.icon}</div>
                                <div className='text-primary-text-light dark:text-primary-text-dark'>{item.msg}</div>
                            </div>
                            <div className='text-xs absolute top-7 left-8 text-secondry-text-light dark:text-secondry-text-dark'>{item.time}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Notification