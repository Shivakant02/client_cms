import { useNavigate } from "react-router-dom";

function PolicyCard({ type, coverageAmount, price,imageUrl }) {
const navigate=useNavigate();

    return (
      <div className="card bg-gray-800 border-black border-solid border-2 w-96 shadow-xl shadow-black mx-2 my-1">
         <figure>
    <img
      src={imageUrl}
      alt="image" 
      className="w-full h-60 object-cover"
      />
  </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-yellow-500">{type}</h2>
          <p>Coverage Amount: {coverageAmount}</p>
          <p>Price: Rupees {price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate("/purchasePolicy",{state:{type,coverageAmount,price,imageUrl}})} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PolicyCard;
  