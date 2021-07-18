//localize
document.querySelectorAll("[data-loc]").forEach(el => {
    const key = el.getAttribute("data-loc");
    el.innerHTML = key.loc();
});