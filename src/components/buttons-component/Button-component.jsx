// import { ReactComponent as PriceList } from '../../assets/icon1.svg'; 
// import { ReactComponent as ServiceRegistration } from '../../assets/serviceRegistr.svg'; 
// import { ReactComponent as DilerContacrs } from '../../assets/dilerContacts.svg'; 
// import { ReactComponent as Hours } from '../../assets/hours.svg'; 


import './Button-styles.scss';


const Button = ({btn}) => {
    const {title, icon} = btn;
    console.log(btn);
    return (
            
               <button className='btn1'><span>{icon}</span>{title}</button>
        
    ) 
}

export default Button; 