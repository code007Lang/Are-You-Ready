let count = 10;

let timer = setInterval(function(){

    document.getElementById("count").innerHTML = count;

    count--;

    if(count < 0){

        clearInterval(timer);

        document.getElementById("count").style.display = "none";

        document.getElementById("imageBox").style.display = "block";

    }

},1000);