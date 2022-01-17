const getTemplate = () => {
    return `
    <div class="select__input">
                    <span>Text</span>
                    <i class="fa fa-chevron-down"></i>
                </div>
                <div class="select__dropdown">
                    <ul class="select__list">
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>
                        <ul class="select__item">123</ul>

                    </ul>
                </div>
                `
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
    }

    #render() {
        this.$el.innerHTML = getTemplate()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }

}