// Toggle & REaponsive Navigation
const navSlide = () => {
    const iconnav = document.querySelector(".iconnav");
    const navLists = document.querySelector("nav");

    iconnav.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        iconnav.classList.toggle("toogle-iconnav");

    });
}
navSlide();



// Clear form before unload

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}