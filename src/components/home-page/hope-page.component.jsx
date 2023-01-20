
import Button from '../buttons-component/Button-component';
import { buttonInfo } from '../buttons-component/data-btn';
import Card from '../cards/Card';
import data from '../../data.js'; 


import './home-page.component.css';

const Home = () => {
    
    const { products } = data;

    return (

        <div className="home-wrapper">
                
            <div className="header-body">
                <img src="https://images.unsplash.com/photo-1594502225401-a9eab8b405dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="title-img" className='header-img'/>
                <div className="header-title">RIDE VAGINA</div>
            </div>

            <div className="buttons-wrapper">
                {buttonInfo.map((btn) => {
                    return (
                            <Button btn={btn}/>
                        )
                    })}
            </div>

            <div className="App">
                {products.map((products) => (
                    <Card 
                    id={products.id}
                    image={products.image}
                    name={products.name}
                    descr={products.descr}
                    price={products.price}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Home;