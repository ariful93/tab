let tabLists = document.querySelectorAll('.tab-items')
let indicator = document.querySelector('.indicator')


tabLists.forEach((list) => {
    let tabItems = list.querySelectorAll('.tab-btn')
    let tabContents = list.querySelectorAll('.tab-content')
    tabItems.forEach((item, index) => {
        let widthPercent = 100 / tabItems.length;
        indicator.style.width = `${widthPercent}%`;
        
        item.addEventListener('click', () => {
            let width = indicator.offsetWidth
            indicator.style.transform = `translate(calc(${width}px * ${index}))`;
            
            
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

