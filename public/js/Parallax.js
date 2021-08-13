document.addEventListener("mousemove", parallax);


function parallax(e){
    document.querySelectorAll(".parallax").forEach(function(image){

        var speed = image.getAttribute("data-speed");
        var x = (e.clientX * speed) / 150;
        var y = (e.clientY * speed) / 150;

        image.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}