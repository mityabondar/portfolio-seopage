export function Hero() {

    // Background in Hero
    if (document.getElementById("hero-bg")) {
        let changeBgHeight = () => {
            const heroBg = document.getElementById("hero-bg")
            const heroContent = document.getElementById("hero-content")

            let heroContentHeight = heroContent.getBoundingClientRect().height
            let heroContentHeightDefault = heroBg.style.getPropertyValue("height")

            let heroBgHeight = heroContentHeight !== 0 ? heroContentHeight+'px' : heroContentHeightDefault
            heroBg.style.height = heroBgHeight
        }
        changeBgHeight()

        // Setup a timer
        let timeout
        window.addEventListener('resize', function (e) {
            // If there's a timer, cancel it
            if (timeout) {
                window.cancelAnimationFrame(timeout)
            }
            // Setup the new requestAnimationFrame()
            timeout = window.requestAnimationFrame(changeBgHeight)
        }, false)
    }

}
