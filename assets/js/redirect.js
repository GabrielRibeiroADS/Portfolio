function redirect(link){
    const allLinks = document.getElementsByClassName("nav-link")
    for (let index = 0; index < allLinks.length; index++) {
        allLinks[index].classList.remove("active")
    }

    link.classList.add("active")
}
