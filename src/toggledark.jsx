const moon = document.querySelector('#moon')

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
})

//const links = document.getElementById("nav-links")

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {

        e.preventDefault()
        //links.classList.remove("show-links")

        const id = e.target.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        //      const element: HTMLElement

        let position = element.offsetTop - 62

        window.scrollTo( {
            left: 0,
            //top: element.offsetTop
            top: position,
            behavior: "smooth"
        })
    })
})