function openPage() {
    document.getElementById("hiddenPage").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePage() {
    document.getElementById("hiddenPage").classList.remove("active");
    document.body.style.overflow = "auto";
}


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        closePage();
    }
});
