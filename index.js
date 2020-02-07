document.addEventListener("DOMContentLoaded", function () {
    updateInnerHtml()
});

function updateInnerHtml() {
    let text = document.getElementById("text");
    text.innerHTML = "This is really cool!";
};