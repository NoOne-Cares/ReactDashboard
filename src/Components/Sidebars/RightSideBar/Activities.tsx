import { ActivityData } from '../../../assets/data/ActivitesData'

const Activities = () => {
    return (
        <div className='pt-4'>
            <div className='font-medium text-primary-text-light dark:text-primary-text-dark'>
                Activities
            </div>
            <div className='py-2'>

                {ActivityData.map(activity =>
                    <div className='py-2 relative'>
                        <div className='flex gap-2' id={activity.message}>
                            <img src={activity.img} alt="paerson image" />
                            <div className='text-primary-text-light dark:text-primary-text-dark'>{activity.message}</div>
                        </div>

                        {activity.img != "./person5.png" ? <div className='dark:bg-secondary-bg-dark bg-secondary-bg-light absolute left-3 h-3 w-0.5'></div> : <></>}
                        <div className='text-xs absolute  left-8 text-secondry-text-light dark:text-secondry-text-dark'>{activity.time}</div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Activities