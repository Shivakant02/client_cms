import Card from "../components/Card"
import carInsurance from "../assets/car insurance.jpg"
import healthInsurance from "../assets/health insurance.jpg"
import homeInsurance from "../assets/home_insuranace.jpg"


function Policies() {
  return (
    <div className=" mt-4 flex flex-wrap gap-2 justify-around">
      <Card
  type="Health Insurance" 
  coverageAmount="500000" 
  price="499" 
  imageUrl={healthInsurance}
/>
      <Card
  type="Term Insurance" 
  coverageAmount="500000" 
  price="999" 
  imageUrl="https://cdn.pixabay.com/photo/2020/04/23/04/03/covid-19-5080953_1280.jpg"
/>
      <Card
  type="Car Insurance" 
  coverageAmount="500000" 
  price="799" 
  imageUrl={carInsurance}/>
      <Card
  type="Home Insurance" 
  coverageAmount="1000000" 
  price="1499" 
  imageUrl={homeInsurance}
/>
      <Card
  type="Pet Insurance" 
  coverageAmount="500000" 
  price="399" 
  imageUrl="https://cdn.pixabay.com/photo/2020/04/23/04/03/covid-19-5080953_1280.jpg"
/>
      <Card
  type="business Insurance" 
  coverageAmount="500000" 
  price="899" 
  imageUrl="https://cdn.pixabay.com/photo/2020/04/23/04/03/covid-19-5080953_1280.jpg"
/>
    </div>
  );
}

export default Policies;
