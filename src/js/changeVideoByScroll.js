export function ScrollVideo() {

    const videosStickyWrapper = document.getElementById('video-sticky')
    const firstVideo = document.getElementById('first-video')
    const secondVideo = document.getElementById('second-video')

    let isFirstVideoShow = true
    let isSecondVideoShow = false

    function showSecondVideo() {
        firstVideo.setAttribute('aria-hidden', 'true')
        secondVideo.removeAttribute('aria-hidden')
        isFirstVideoShow = false
        isSecondVideoShow = true
        firstVideo.pause()
        firstVideo.currentTime = 0
        secondVideo.play()
    }

    function showFirstVideo() {
        firstVideo.removeAttribute('aria-hidden')
        secondVideo.setAttribute('aria-hidden', 'true')
        isFirstVideoShow = true
        isSecondVideoShow = false
        firstVideo.play()
        secondVideo.pause()
        secondVideo.currentTime = 0
    }

    if (firstVideo && secondVideo && videosStickyWrapper) {
        window.addEventListener('scroll', () => {

            // videoWrapper is hidden for mobile
            const videoWrapper = document.getElementById('video-wrapper')
            if (videoWrapper) {

                let videoWrapperHeight = videoWrapper.scrollHeight
                let breakpointForChangeVideo = videoWrapperHeight / 1.5

                videoWrapperHeight == 0 ? window.removeEventListener('scroll', changeVideo) : changeVideo()

                function changeVideo() {
                    let stickyWrapperHeight = videosStickyWrapper.getBoundingClientRect().height
                    let stickyWrapperOffsetTop = videosStickyWrapper.offsetTop
                    let stickyWrapperOffsetBottom = stickyWrapperOffsetTop + stickyWrapperHeight

                    if (breakpointForChangeVideo < stickyWrapperOffsetBottom) {
                        if (!isSecondVideoShow) showSecondVideo()
                    } else {
                        if (!isFirstVideoShow) showFirstVideo()
                    }
                }
            }

        })
    }

}
