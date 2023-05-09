
const Home = () =>{
    return(
<div>

<div className="container-fluid mt-5 mb-3 ml-5 mr-5">
    <div className="row">
    <div className="col"></div>
        <div className="col">
        
        <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
            <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/08/GettyImages-1209700460.jpg" className="w-full" alt=""/>
        </div> 
        <div id="item2" className="carousel-item w-full">
            <img src="https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg?crop=1xw:0.84276xh;center,top" className="w-full" alt=""/>
        </div> 
        <div id="item3" className="carousel-item w-full">
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/170606121206-italy---travel-destination---shutterstock-517522957-super-tease.jpg" className="w-full" alt=""/>
        </div> 
        <div id="item4" className="carousel-item w-full">
            <img src="https://image.cnbcfm.com/api/v1/image/107178919-1673854215895-gettyimages-669463000-shutterstock_621020393.jpeg?v=1674003106" className="w-full" alt=""/>
        </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
        </div>

        </div>
    </div>
</div>
        
</div>
    )
}

export default Home;