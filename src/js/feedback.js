export function Feedback() {

    const inputType = document.getElementById('feedback-type')
    const dataList = document.getElementById('projects')

    if (!inputType) return

    let currentTypeId = '1'
    inputType.addEventListener('input', () => {
        const currentType = document.querySelector(`#${dataList.id} option[value="${inputType.value}"]`)
        currentType !== null ? currentTypeId = currentType.getAttribute('data-id') : currentTypeId = '1'
    })

}
