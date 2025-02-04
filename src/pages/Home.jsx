import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-72px)]">
        <button className="btn btn-accent btn-outline btn-lg"><Link to="/policies">See all the Policies</Link></button>
    </div>
  )
}

export default Home