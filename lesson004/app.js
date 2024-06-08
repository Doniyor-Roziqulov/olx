let elh2 = document.querySelector(".count");
let elBtn1 = document.querySelector(".increase");
let elBtn2 = document.querySelector(".decrease");
let offset = 0;
function inc() {
    offset++;
    elh2.innerHTML = offset;
}

function reset() {
    offset = 0;
    elh2.innerHTML = offset;
}

function dec() {
    if (offset <= 0) {
        return;
    }
    offset--;
    elh2.innerHTML = offset;
}
