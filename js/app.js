let tabLists = document.querySelectorAll('.tab-items')


tabLists.forEach((list) => {
    let tabItems = list.querySelectorAll('.tab-btn')
    let tabContents = list.querySelectorAll('.tab-content')
    tabItems.forEach((item) => {
        item.addEventListener('click', () => {
            // remove active class
            tabItems.forEach((item) => {
                item.classList.remove('active')
            })
    
            // add active class
            if ( !item.classList.contains('active') ) {
                item.classList.add('active')
            }
    
            let dataTab = item.getAttribute('data-tab');
            tabContents.forEach((content) => {
                if ( content.id === dataTab ) {
                    content.classList.add('active')
                } else {
                    content.classList.remove('active')
                }
            })
        })
    })
})

