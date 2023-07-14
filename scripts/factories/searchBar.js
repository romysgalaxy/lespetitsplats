class SearchBar {

    /**
     * Manage the value input of the search bar
     */
    handleInput() {
        //DOM creation
        const input = document.querySelector('.header_searchBar-input')
        const btn = document.querySelector('.header_container-img')
        const results = document.querySelector('.header_searchBar-results')
        const error = document.querySelector('.header_searchBar-error')
        error.style.display = "none"
        
        // Create tags when user submit his data on the input
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // // Block the tag number at 5
            // const tags = results.querySelectorAll('.header_searchBar-tag')
            // if (tags.length >= 5) {
            //     error.style.display = "block";
            //     error.textContent = "Vous ne pouvez pas ajouter plus de 5 tags.";
            //     return;
            // }
            
            
            if (input.value.length >= 3) {
                const result = document.createElement('p')
                const tag = document.createElement('div')
                tag.setAttribute('class', 'header_searchBar-tag')
                const close = document.createElement('img')
                close.setAttribute('class', 'header_searchBar-close')
                close.setAttribute('src', './assets/close-black.svg')

                result.textContent = input.value
                input.value = ''
                tag.appendChild(result)
                tag.appendChild(close)
                results.appendChild(tag)
                error.style.display = "none"

                close.addEventListener('click', () => {
                    results.removeChild(tag);
                })

            } else {
                error.style.display = "block"
            }
        })
    }
}