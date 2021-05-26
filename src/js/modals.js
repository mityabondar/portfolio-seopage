export function Modals() {

    const openModalButtons = document.querySelectorAll('[data-hook="open-modal"]')
    if (!openModalButtons) return

    let untrapFocus = null

    const trapFocus = (root, closeCb = () => {}) => {
        const focusableElementsString = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'

        const wasInFocus = document.activeElement
        const interactiveElements = Array.from(root.querySelectorAll(focusableElementsString))
        const interactiveElementsCount = interactiveElements.length
        const firstElement = interactiveElements[0]
        const lastElement = interactiveElements[interactiveElementsCount - 1]
        firstElement.focus()

        const keydownHandler = e => {
            const isTab = e.code === 'Tab' && !e.shiftKey
            const isShiftTab = e.code === 'Tab' && e.shiftKey
            const isEsc = e.code === 'Escape'
            const isFirstElementInFocus = document.activeElement === firstElement
            const isLastElementInFocus = document.activeElement === lastElement

            if (isFirstElementInFocus && isShiftTab) {
                e.preventDefault()
                lastElement.focus()
                return
            }

            if (isLastElementInFocus && isTab) {
                e.preventDefault()
                firstElement.focus()
                return
            }

            if (isEsc) {
                e.preventDefault()
                closeCb()
            }
        }

        document.addEventListener('keydown', keydownHandler)

        return () => {
            if (wasInFocus) wasInFocus.focus()
            document.removeEventListener('keydown', keydownHandler)
        }
    }

    openModalButtons.forEach(button => {
        button.addEventListener("click", (e) => {

            const modalNameById = e.target.getAttribute('data-modal')
            const modal = document.getElementById(modalNameById)
            const modalCloseButton = modal.querySelector('[data-hook="close-modal"]')
            const modalBackground = modal.querySelector('[data-hook="close-modal-bg"]')

            if (modal && modalCloseButton && modalBackground) {

                function closeModal() {
                    modal.setAttribute('hidden', 'true')
                    modal.setAttribute('aria-modal', false)
                    document.body.classList.remove('modal-open')
                    button.focus()
                    if (untrapFocus) untrapFocus()
                }

                function openModal() {
                    modal.removeAttribute('hidden')
                    modal.setAttribute('aria-modal', true)
                    document.body.classList.add('modal-open')
                    modalCloseButton.focus()
                    untrapFocus = trapFocus(modal, closeModal)
                }

                openModal()

                modalCloseButton.addEventListener("click", () => closeModal())
                modalBackground.addEventListener("click", () => closeModal())

            }

        })
    })

}
