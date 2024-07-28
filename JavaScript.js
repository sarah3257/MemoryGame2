arrImg = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

var lenA = 16;
var time = 1;
var first;
var second;

function fun() {

    for (var i = 1; i <= 16; i++) {
        var x = document.createElement("div")
        var y = Math.ceil(Math.random() * (--lenA))
        x.setAttribute("data-card", "img" + arrImg[y]);
        x.addEventListener("click", open);
        arrImg[y] = arrImg[lenA];
        document.getElementsByTagName("div")[0].appendChild(x)
    }
}
function open() {
    if (time == 1) {
        first = event.target
        first.className = first.getAttribute("data-card")
        time = 2
    }
    else if (time == 2) {
        second = event.target
        if (first != second) {
            second.className = second.getAttribute("data-card")
            if (first.getAttribute("data-card") == second.getAttribute("data-card")) {
                time = 1
                first.classList.add("opacity")
                second.classList.add("opacity")
                first.removeEventListener("click", open)
                second.removeEventListener("click", open)
                count++;
            }
            else {
                time = 3
                window.setTimeout(close, 1000)
            }
        }


    }
}
function close() {
    time = 1;
    first.className = "";
    second.className = "";
}