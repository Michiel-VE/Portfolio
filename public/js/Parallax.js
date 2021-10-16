document.addEventListener("mousemove", parallax);


function parallax(e){
    document.querySelectorAll(".parallax").forEach(function(image){

        const speed = image.getAttribute("data-speed");
        const x = (e.clientX * speed) / 20;
        const y = (e.clientY * speed) / 20;

        image.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
