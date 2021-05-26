'use strict'

export function Calculator() {

    const WORDS_ON_PAGE = 275
    const DEFAULT_PRICE = 9
    const DEFAULT_TYPE_ID = 1
    
    const typeField = document.getElementById('paper-type')
    const typeDatalist = document.getElementById('types-list')
    let currentTypePrice = typeField.getAttribute('data-price') ? parseInt(typeField.getAttribute('data-price'), 10) : DEFAULT_PRICE

    const quantityField = document.getElementById('pages-quantity')
    const buttonIncrement = document.getElementById('increment-button')
    const buttonDecrement = document.getElementById('decrement-button')
    const quantityMask = document.getElementById('quantity-mask')
    const highLimit = parseInt(quantityField.getAttribute('max'), 10) || 363
    const lowLimit = parseInt(quantityField.getAttribute('min'), 10) || 1
    let isQuantityError = false
    let currentQuantity = lowLimit

    const outputFullPrice = document.getElementById('full-price')
    const outputSalePrice = document.getElementById('sale-price')
    const calculateSubmit = document.getElementById('calculate-submit')

    // Functions

    function incrementPagesQuantity(isQuantityError) {
        const value = quantityField.value
        let numericValue = parseInt(value, 10)

        if (isNaN(numericValue) || numericValue < lowLimit || numericValue > highLimit) {
            numericValue = lowLimit
        } else if (numericValue + 1 <= highLimit) {
            numericValue++
        }

        currentQuantity = numericValue
        quantityField.value = numericValue.toString()
        isQuantityError ? hideQuantityMask() : addQuantityMask()
        updatePrice()
    }

    function decrementPagesQuantity(isQuantityError) {
        const value = quantityField.value
        let numericValue = parseInt(value, 10)

        if (isNaN(numericValue) || numericValue < lowLimit || numericValue > highLimit) {
            numericValue = lowLimit
        } else if (numericValue - 1 >= lowLimit) {
            numericValue--
        }

        currentQuantity = numericValue
        quantityField.value = numericValue.toString()
        isQuantityError ? hideQuantityMask() : addQuantityMask()
        updatePrice()
    }

    function updatePagesQuantity() {
        currentQuantity = parseInt(quantityField.value, 10)
        if (currentQuantity > lowLimit && currentQuantity < highLimit) {
            quantityField.value = currentQuantity
            resetError(quantityField)
            updatePrice()
        }
    }

    function addQuantityMask() {
        const wordsOnPages = currentQuantity * WORDS_ON_PAGE
        const variantOfWord = currentQuantity === 1 ? 'page' : 'pages'
        const maskQuantity = `${currentQuantity} ${variantOfWord}/${wordsOnPages} words`
        quantityMask.innerText = maskQuantity
        quantityMask.removeAttribute('hidden')
    }

    function hideQuantityMask() {
        quantityMask.setAttribute('hidden', true)
        quantityField.focus()
    }

    function getTypePrice() {
        const currentType = document.querySelector(`#${typeDatalist.id} option[value="${typeField.value}"]`)
        currentType !== null ? currentTypePrice = currentType.getAttribute('data-price') : currentTypePrice = DEFAULT_PRICE
        typeField.setAttribute('data-price', currentTypePrice)
        resetError(typeField)
        updatePrice()
    }

    function quantityBlur(value) {
        if (value !== '' && quantityField.checkValidity()) {
            addQuantityMask()
            resetError(quantityField)
            isQuantityError = false
        } else {
            hideQuantityMask()
            setError(quantityField)
            isQuantityError = true
        }
    }

    function updatePrice() {
        const salePrice = currentQuantity * currentTypePrice
        const fullPrice = Math.ceil(salePrice * 1.5)

        outputSalePrice.innerText = `$${salePrice}`
        outputFullPrice.innerText = `$${fullPrice}`

        addQuantityMask()
    }

    function setError(inputElement) {
        const errorElementID = `${inputElement.id}-error`
        const errorElement = document.getElementById(errorElementID)
        errorElement.removeAttribute('hidden')
        errorElement.setAttribute('role', 'alert')
        errorElement.setAttribute('aria-invalid', 'true')
    }

    function resetError(inputElement) {
        const errorElementID = `${inputElement.id}-error`
        const errorElement = document.getElementById(errorElementID)
        errorElement.removeAttribute('role')
        errorElement.removeAttribute('aria-invalid')
        errorElement.setAttribute('hidden', true)
    }

    function validationInputs() {
        let isValid = true

        if (!typeField.checkValidity()) {
            setError(typeField)
            isValid = false
        }
        if (!quantityField.checkValidity()) {
            hideQuantityMask()
            setError(quantityField)
            isQuantityError = true
            isValid = false
        } else {
            isQuantityError = false
        }
        if (!isValid) return

        updatePrice()
    }

    // Listeners

    quantityField.addEventListener('focus', hideQuantityMask)
    quantityField.addEventListener('input', updatePagesQuantity)
    typeField.addEventListener('input', getTypePrice)
    quantityField.addEventListener('blur', e => quantityBlur(e.target.value))
    buttonIncrement.addEventListener('click', () => incrementPagesQuantity(isQuantityError))
    buttonDecrement.addEventListener('click', () => decrementPagesQuantity(isQuantityError))
    quantityMask.addEventListener('click', hideQuantityMask)
    calculateSubmit.addEventListener('click', validationInputs)

    updatePrice()

}
