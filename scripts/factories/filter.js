class Filter {

    constructor() {
        //initialize the 3 filters
        this.initializeFilter('ingredient', '.filter_ingredient');
        this.initializeFilter('appliance', '.filter_appliance');
        this.initializeFilter('ustensil', '.filter_ustensil');
    }

    /**
     * Add an input text when user click on one filter
     * @param {*} filterId filter #id
     * @param {*} filterCssClass css class of the filter
     */
    initializeFilter(filterId, filterCssClass) {

        //DOM creation
        const filterElement = document.querySelector(`#${filterId}`)
        const filterCss = document.querySelector(filterCssClass)

        const container = document.createElement('div')
        container.setAttribute('class', `filter_input_${filterId}`)

        const chevronUp = document.querySelector(`.filter_chevronUp_${filterId}`)
        const chevronDown = document.querySelector(`.filter_chevronDown_${filterId}`)

        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('class', `input_${filterId}`)

        const searchIcon = document.createElement('img')
        searchIcon.setAttribute('src', './assets/search-gray.svg')
        searchIcon.setAttribute('class', `filter_search_${filterId}`)

        const close = document.createElement('img')
        close.setAttribute('src', 'assets/close-gray.svg')
        close.setAttribute('class', `filter_cross_${filterId}`)
        close.style.display = 'none'
        
        container. appendChild(input)
        container. appendChild(searchIcon) 
        searchIcon.before(close)

        let isInputVisible = false

        //Display an input text when user click on the filter
        if (filterElement) { //if a filter is clicked
            filterElement.addEventListener('click', () => {
                if (!isInputVisible) {
                    chevronDown.style.display = 'none'
                    chevronUp.style.display = 'block'
                    container.style.display = 'flex'
                    filterElement.after(container)
                    filterCss.style.height = "auto"
                    filterCss.style.maxHeight = "315px"
                    isInputVisible = true
                    input.focus() // focus on the text input
                    this.handleInput(filterId) // call handleInput method
                } else {
                    chevronDown.style.display = 'block'
                    chevronUp.style.display = 'none'
                    container.style.display = 'none'
                    filterCss.style.height = '56px'
                    isInputVisible = false
                }
            })
        }
    } 

    /**
     * Manage the input state
     * @param {*} filterId filter #id
     */
    handleInput(filterId) {

        //DOM selection
        const input = document.querySelector(`.input_${filterId}`)
        const close = document.querySelector(`.filter_cross_${filterId}`)
        const chevronUp = document.querySelector(`.filter_chevronUp_${filterId}`)

        //add a close button if the input text != null
        input.addEventListener('input', () => {
            const userInput = input.value;
            console.log(`input_${filterId}`, userInput);
            if (userInput) {
                if(close.style.display = "none") {
                    close.style.display = "flex"
                }
            } else {
                close.style.display = "none"
            }
        });

        //reset the input text if the user click en on the close button
        close.addEventListener('click', () => {
            input.value = ""
            close.style.display = "none"
        })

        chevronUp.addEventListener('click', () => {
            input.value = ""
            close.style.display = "none"
        })

    }

}