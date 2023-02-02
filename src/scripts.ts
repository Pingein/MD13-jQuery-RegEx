
import { validator } from './utils/helper'
import * as $ from 'jquery';



$('input').each((index, element:HTMLInputElement) => {
    if (element.type != 'text') {
        return
    }
    element.addEventListener('input', () => {

        if (!element.value) {
            element.style.backgroundColor = '#292929'
            return
        }
        if (validator(element.id, element.value)) {
            element.style.backgroundColor = '#005800'
        } else {
            element.style.backgroundColor = '#640000'
        }
    })
})

$('.js-submit').on('click', (e) => {
    e.preventDefault()
    console.log(e)
})

