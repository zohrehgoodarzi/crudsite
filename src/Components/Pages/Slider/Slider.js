import CustomSlider from "../../../CustomHooks/CustomSlider"; 
import "../Home/HomestyleCss/HomeStyle.css"; 
 import  girl from "../../../media/girl.jpg" ;
 
const Slider = () => {
    let {isLoading,isError,error,data}=CustomSlider();
    
    if(isLoading){
        return<h1>isLoading</h1>
    }

    if(isError){
        return<h1>{error.message}</h1>
    }
    
    return (
       <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active">
       <img src={girl}className="d-block w-100" alt="girl"/>
    </div>
    {data&&data.map((elem)=>{
      return(
    <div className="carousel-item" key={elem.id}>
      <img src={require(`../../../media/${elem.url}`) }className="d-block w-100" alt={elem.alt} title={elem.title}/>
    </div>
    )})}
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </>
    );
};
export default Slider;