$('#review-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: true,
      infinite: true,
    });
const API_URL = "https://61f6a02b2e1d7e0017fd6e35.mockapi.io/api/v1/customers";
fetch(API_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0 ; i <= data.length ; i++) {
           $('#review-carousel').slick('slickAdd',`<div class="carousel">
           <div class="comment">
               <p>"${data[i].comment}"</p>
           </div>
           <div class="avatar">
               <img class="picture" src="${data[i].avatar}" alt="ff">
           </div>
           <div class="name">
               <p><b>${data[i].name}</b></p>
           </div>
           <div class="occupation">
               <p><b>${data[i].occupation}</b></p>
           </div>             
       </div>
       `)
      }
    })

    

