import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Выбери пожалуйста элемент'
})

window.s = select