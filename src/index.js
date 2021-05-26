import './common.css'

import { Hero } from './js/hero.js'
import { Calculator } from './js/calculator.js'
import { ScrollVideo } from './js/changeVideoByScroll'
import { Experts } from './js/experts.js'
import { Works } from './js/works.js'
import { Feedback } from './js/feedback.js'
import { Tabs } from './js/tabs.js'
import { Modals } from './js/modals.js'
import { Sliders } from './js/sliders.js'

if (document.readyState === 'interactive') {
    init()
} else {
    document.addEventListener('DOMContentLoaded', init, {once: true})
}

function init() {

    Hero()
    Calculator()
    ScrollVideo()
    Feedback()
    Experts()
    Works()
    Tabs()
    Modals()
    Sliders()

}