

// start js click nav
var navItemCollapse = document.querySelectorAll('#Header .nav .nav-item .nav-link');
navItemCollapse.forEach(element => {
    element.addEventListener("click", function() {

        // Remove the "active" class from all list items
        navItemCollapse.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add the "active" class to the clicked item
        this.classList.add("active");
    })
});
// end js click nav

