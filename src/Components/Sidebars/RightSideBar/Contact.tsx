import { ContactData } from "../../../assets/data/ContactData"

const Contact = () => {
    return (
        <div className='pt-4'>
            <div className='font-medium text-primary-text-light dark:text-primary-text-dark'>
                Contact
            </div>
            <div className='py-2'>
                {ContactData.map(contact =>
                    <div className="flex py-1 gap-2" id={contact.name}>
                        <img src={contact.img} alt="person image" />
                        <div className="text-primary-text-light dark:text-primary-text-dark">{contact.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact