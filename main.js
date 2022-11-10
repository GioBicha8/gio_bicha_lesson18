// დავალება #1 Digital Clock

setInterval(function () {
  const clock = document.querySelector(".display");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let day = "AM";
   

  clock.textContent = hr + ":" + min + ":" + sec + " " + day;
});
// დავალება #2 SlIDER
let imageno = 1;
displayimg(imageno);

function nextimg(n) {
  displayimg((imageno += n));
}

function currentSlide(n) {
  displayimg((imageno = n));
}

function displayimg(n) {
  let i;
  let image = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");

  if (n > image.length) {
    imageno = 1;
  }

  if (n < 1) {
    imageno = image.length;
  }

  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  image[imageno - 1].style.display = "block";
  dots[imageno - 1].className += " active";
}

// setInterval(() => {
//   document.querySelector(".image.show").classList.remove("show");
//   const img = document.querySelector(`.img-${counter}`);
//   img.classList.add("show");
//   counter++;

//   if (counter > 4) {
//     counter = 1;
//   }
// }, 3000);
