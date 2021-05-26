export function Tabs() {

    // Tabs
    const tabWrapper = document.getElementById('tabs')
    const tabList = document.getElementById('tablist')
    const tabs = document.querySelectorAll('[role="tab"]')

    tabs.forEach(tab => tab.addEventListener("click", changeTabs))

    function changeTabs(e) {
        const target = e.target

        // Remove all current selected tabs
        tabList.querySelectorAll('[aria-selected="true"]').forEach(elements => elements.setAttribute("aria-selected", false))
        target.setAttribute("aria-selected", true)

        // Hide all tab panels
        tabWrapper.querySelectorAll('[role="tabpanel"]').forEach(elements => elements.setAttribute("hidden", true))

        // Show the selected panel
        tabWrapper.querySelector(`#${target.getAttribute("aria-controls")}`).removeAttribute("hidden")
    }

}
