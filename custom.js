// media query event handler
var matchedWidth = window.matchMedia("(min-width: 1900px)").matches;

if (matchedWidth) {
    const minSizeWidth = window.matchMedia("(min-width: 1900px)");
    minSizeWidth.addListener(WidthChange);
    WidthChange(minSizeWidth);
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

// Defining event listener function
function toggleHiddenClass() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var divArchitect = document.querySelector('.divArchitect');

    if (w > 1700 && h > 700) {
        divArchitect.removeAttribute("hidden");
    } else {
        divArchitect.setAttribute("hidden", "hidden");
    }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", toggleHiddenClass);

// Calling the function for the first time
toggleHiddenClass();