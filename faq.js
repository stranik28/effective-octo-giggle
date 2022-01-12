const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        $(items[i]).parent().css({'border' : 'none'});
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
        $(this).parent().css({'border' : '3px solid #F14D34'});
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));