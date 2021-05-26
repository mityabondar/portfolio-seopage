export function Experts() {

    // Validate hire form

    const regForm = document.getElementById('regForm')
    if (!regForm) return

    const fastregEmailInput = regForm.querySelector('[type="email"]')
    const fastregError = document.getElementById('email-error')

    regForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const setError = (error) => {
            fastregError.innerHTML = error
            fastregError.removeAttribute('hidden')
            fastregError.setAttribute("role", "alert")
            fastregEmailInput.setAttribute("aria-invalid", "true")
            fastregEmailInput.focus()
        }

        const resetError = () => {
            fastregError.setAttribute("hidden", "true")
            fastregError.removeAttribute('role')
            fastregEmailInput.setAttribute("aria-invalid", "false")
        }

        resetError()

        if (!fastregEmailInput.validity.valid) {
            e.preventDefault()
            setError('Invalid email')
        }
    })

}
