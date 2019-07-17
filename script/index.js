//jS

// loadContent runs the whole show in this demo
const loadContent = () => {
    // selecting all of the "item" class
    const tabHeaders = document.querySelectorAll('.item');
    // selecting all of the "tab-content" class
    const tabContents = Array.from(document.querySelectorAll('.tab-content'));
    console.log(tabContents);
    // takes the 1st instance of tabContents array and adds class 'selected'
    tabContents[0].classList.add('selected');
    // handleClick waits to be called by the addEventListener
    const handleClick = (e) => {
        // looping through all of the divs
        tabHeaders.forEach(function(header) {
            // to remove the "selected" class so that the current selection is reset
            header.classList.remove('selected');
        });
        // creates short hand for e.target
        const el = e.target;
        // adds class selected to new item
        el.classList.add('selected');
        // creates shorthand for el.dataset.tabname
        const tabname = el.dataset.tabname;
        // loops through tabContents 
        tabContents.forEach(function(tab) {
            // if any of the tabnames match the clicked tab
            if (tab.dataset.tabname === tabname) {
                // give that tab the 'selected' class name
                tab.classList.add('selected');
                // if none of the tabnames match the clicked tab
            } else {
                // hide the old content
                tab.classList.add('hidden');
                // and remove the 'selected' class
                tab.classList.remove('selected');
            }
        });
    }
    //loop throught all of the tab headers to listen for a click event then call handleClick
    tabHeaders.forEach(function(tab) {tab.addEventListener('click', handleClick)});
}


// waits for the DOM to load before calling loadContent
document.addEventListener('DOMContentLoaded', loadContent);