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

document.getElementById("input-submit").onclick= function () {
    let name = document.getElementById("input-name").value;
    let occupation = document.getElementById("input-occupation").value;
    let comment = document.getElementById("input-comment").value;
    const review = {
        name: name,
        avatar: "https://picsum.photos/640/480",
        occupation: occupation,
        comment: comment,
    };
    console.log(review);
    if (name == "") {alert("You haven't type your name")} else
    if (occupation == "") {alert("You haven't type your occupation")} else
    if (comment == "") {alert("You haven't type your comment")} else
    if (comment.length == 300) {alert("Comment should only be less than 100 characters")} else
    {fetch(API_URL, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      alert("Success!")}
}
