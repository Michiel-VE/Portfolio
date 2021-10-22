let home = document.getElementById("home");
let sideScroll = document.getElementById("sideScroll");
let projects = document.getElementById('projects')
let arr = [];
arr[0] = home.offsetHeight;
arr[1] = (sideScroll.offsetHeight + home.offsetHeight) / 2;
arr[2] = sideScroll.offsetHeight;

function Scroller(id) {
    switch (id) {
        case "about":
            window.scrollTo(0, arr[0]);
            break;
        case "projects":
            window.scrollTo(0, arr[1]);
            break;
        case "skills":
            window.scrollTo(0, arr[2]);
            break;
        default:
            document.getElementById(id).scrollIntoView();
            break;
    }

}
