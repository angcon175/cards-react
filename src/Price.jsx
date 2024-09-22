import "./Price.css"
export default function Price({oldPrice,newPrice}){
    return (
        <div className="main">
            <span className="old">{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span className="new">{newPrice}</span>
        </div>
    )
}