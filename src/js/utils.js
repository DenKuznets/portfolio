//прекратить скролл окна в фоне
export function preventScroll() {
    if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
    }
}

//возобновить скролл окна в фоне
export function resumeScroll() {
    if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "";
    }
}

//if element is on screen
export function isVisible(elem) {
    let top = elem.getBoundingClientRect().top;
    let bottom = elem.getBoundingClientRect().bottom;
    if (bottom > 0 && top < window.innerHeight) {
        return true;
    }
    return false;
}

export const instantScroll = (scrollFn) => {
    // console.log(document.querySelector("html"));
    const html = document.querySelector("html");
    html.style.scrollBehavior = "auto";
    setTimeout(() => {
        scrollFn();
        html.style.scrollBehavior = "smooth";
    }, 0);
};

 export const smoothScroll = () => {
     const html = document.querySelector("html");
     html.style.scrollBehavior = "smooth";
     setTimeout(() => {
         html.style.scrollBehavior = "auto";
     }, 0);
 };