
// Hide loading animation on full load
function hideLoader() {
    var element = document.getElementById('loading');
    if(element.style.display === "none") {
        element.style.display = "block";
    }else{
        element.style.display = "none"
    }
}