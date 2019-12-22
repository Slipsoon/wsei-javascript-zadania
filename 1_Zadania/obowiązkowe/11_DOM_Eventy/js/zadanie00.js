    // Zadanie 0a

const parentElements = document.querySelectorAll('.parent');
    
parentElements.forEach(parent => {
    parent.addEventListener('mouseenter', function() {
        this.firstElementChild.style.display = 'block';
    });
    parent.addEventListener('mouseleave', function() {
        this.firstElementChild.style.display = 'none';
    });
})






