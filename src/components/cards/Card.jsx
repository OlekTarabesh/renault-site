import './card-style.css';

const Card = (props) => {

    return (
        <div className="card-wrapper">
            <div className="card-body">
                <img src={props.image} alt={props.name} className="card-img" />
                <h2 className="title">{props.name}</h2>
                <p className="descr">{props.descr.toUpperCase()}</p>
            </div>
                <h3 className="price">${props.price}</h3>
                <button className="card-btn">Add to Card</button>
        </div>
    )
}

export default Card;