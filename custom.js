// media query event handler
if (window.matchMedia("(min-width: 2200px)")) {
    const minSize = window.matchMedia("(min-width: 2200px)");
    minSize.addListener(WidthChange);
    WidthChange(minSize);
}

// media query change
function WidthChange(minSize) {
    var divList = document.querySelectorAll('.about-child');
    if (minSize.matches) {
        divList.forEach(element => {
            element.classList.add('col-lg-3');
        })
    } else {
        divList.forEach(element => {
            element.classList.remove('col-lg-3');
        })
    }

}

