setInterval(function(){
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
     
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
  });
