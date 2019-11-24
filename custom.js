// media query event handler
if (window.matchMedia("(min-width: 2000px)")) {
    const minSize = window.matchMedia("(min-width: 2000px)");
    minSize.addListener(WidthChange);
    minSize.addListener(toggleDivArchitect);
    WidthChange(minSize);
    toggleDivArchitect(minSize);
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

function toggleDivArchitect(minSize) {
    var divArchitect = document.querySelector('.divArchitect');
    if (minSize.matches) {
        divArchitect.removeAttribute("hidden");
    } else {
        divArchitect.setAttribute("hidden", "hidden");
    }
}

