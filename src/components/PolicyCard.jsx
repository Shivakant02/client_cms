import { useLocation, useNavigate } from "react-router-dom"

function PolicyCard({data}) {
    const navigate = useNavigate()
  return (
    <div>
        <div className="card bg-gray-800 border-black border-solid border-2 w-96 shadow-xl shadow-black mx-2 my-1">
        <figure>
    <img
    src={data.avatar}
      alt="image" 
      className="w-full h-60 object-cover"
      />
  </figure>
        <div className="card-body">
          <div className=" flex flex-col items-center justify-center"><h2 className="card-title text-2xl text-yellow-500">{data.type}</h2></div>
          <ul className="text-white flex flex-col gap-2">
            <li>Id: {data._id}</li>
            <li>Coverage: {data.coverage}</li>
            <li>Price: {data.premium}</li>
            <li>start date: {data.start_date}</li>
            <li>valid till: {data.end_date}</li>
            <li>Status: {data.status}</li>
          </ul>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate(`/${data._id}/claim`,{state:data})} className=" w-full btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyCard