
const Home = () =>{
    return(
<div>

{/* carousel  */}

<div className="container-fluid mt-10 mb-3 ml-5 mr-5">
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
{/* carousel End*/}



<div className="flex flex-col lg:flex-row mt-8 mb-8">
  <div className="grid flex-grow card  rounded-box place-items-center">

 

    </div> 
  {/* <div className="divider lg:divider-horizontal"></div>  */}


{/* Card */}
  <div className="grid flex-grow h-32 card  rounded-box place-items-center">



<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center pt-2">
<p className="text-pink-400">UNTIL YOUR NEXT TRIP!</p>
<span className="countdown font-mono text-2xl mt-3">
  <span style={{"--value":10}}></span>h
  <span style={{"--value":24}}></span>m
  <span style={{"--value":35}}></span>s
</span>
 
</div>

<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary mb-1">I CANNOT wait for our trip! 🧳  🛫 </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary mb-9">Mexico is going to be AMAZING! 🏝🍹🌮</div>
</div>
</div>
  </div>

  {/* Card End*/}



{/* Card */}
<div className="grid flex-grow h-32 card  rounded-box place-items-center">



<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center pt-2">
<p>Yoda</p>
  <h2 className="card-title">

  <div className="avatar online">
<div className="w-24 rounded-full border">
  <img src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a" alt="" />
</div>
</div>


  </h2>
  
  <p>In Las Vegas, I am.</p>
  <div className="card-actions">
  <button class="btn rounded-full">Follow</button>
  </div>
</div>
</div>
  </div>



  <div className="grid flex-grow card rounded-box place-items-center ">

{/* Youtube Start */}

  <iframe width="450" height="250" src="https://www.youtube.com/embed/s3G2kLruJJo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullScreen></iframe>
 
{/* Youtube End */}




  </div>
</div>


        
</div>
    )
}

export default Home;