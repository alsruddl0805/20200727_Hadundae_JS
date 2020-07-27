function modalOpen() {
    document.getElementById("modal").style.display = "block";
}

function modalClose() {
    document.getElementById("modal").style.display = "none";
}

function fnDisplayNotice() {
    document.getElementById("contentNotice").style.display = "block";
    document.getElementById("contentGallery").style.display = "none";
}

function fnDisplayGal() {
    document.getElementById("contentNotice").style.display = "none";
    document.getElementById("contentGallery").style.display = "block";
}

function fnFocus1() {
    document.getElementById("btn1").style.border = "1px solid #ccc";
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn1").style.top = "2px";

    document.getElementById("btn2").style.border = "none";
    document.getElementById("btn2").style.borderBottom = "1px solid #ccc";
    document.getElementById("btn2").style.top = "1px";
}

function fnFocus2() {
    document.getElementById("btn2").style.border = "1px solid #ccc";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn2").style.top = "2px";

    document.getElementById("btn1").style.border = "none";
    document.getElementById("btn1").style.borderBottom = "1px solid #ccc";
    document.getElementById("btn1").style.top = "1px";
}
