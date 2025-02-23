import Card from "../components/Card"

function Policies() {
  return (
   <div className="min-h-screen py-16 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
     <div className=" mt-4 flex flex-wrap gap-2 justify-around">
      <Card
  type="Health Insurance" 
  coverageAmount="500000" 
  price="499" 
  imageUrl="https://th.bing.com/th/id/OIP.-XEnYIXJQwduXqBwuQcPvgHaE8?rs=1&pid=ImgDetMain"
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
  imageUrl="https://www.quoteinspector.com/media/car-insurance/car-insurance-1231756281-wo.jpg"/>
      <Card
  type="Home Insurance" 
  coverageAmount="1000000" 
  price="1499" 
  imageUrl="https://th.bing.com/th/id/OIP.hl-cH4Uf99w6hpDQO5KUJQHaE8?rs=1&pid=ImgDetMain"
/>
      <Card
  type="Pet Insurance" 
  coverageAmount="500000" 
  price="399" 
  imageUrl="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3YyMTEtYmItMTAtaW5zdXJhbmNlXzIuanBn.jpg?s=holx4icOvyHEeUIgWuQrywwlOrBzweBxExefp4WfbIU"
/>
      <Card
  type="business Insurance" 
  coverageAmount="500000" 
  price="899" 
  imageUrl="https://th.bing.com/th/id/OIP._485EaS3o0uzGliR-q1sEgHaEK?rs=1&pid=ImgDetMain"
/>
    </div>
   </div>
  );
}

export default Policies;
