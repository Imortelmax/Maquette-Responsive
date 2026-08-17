document.addEventListener('DOMContentLoaded', function() {
    // Gestion des menus déroulants
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.has-dropdown');
            const dropdownMenu = parent.querySelector('.dropdown-menu');

            if (dropdownMenu) {
                const isOpen = dropdownMenu.style.display === 'flex';

                // Fermer tous les autres menus d'abord
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
                document.querySelectorAll('.button').forEach(btn => {
                    btn.setAttribute('aria-expanded', 'false');
                });

                if (!isOpen) {
                    dropdownMenu.style.display = 'flex';
                    this.setAttribute('aria-expanded', 'true');
                }
            }

            // Rotation de la flèche
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = img.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    });

    // Fermer les menus en cliquant ailleurs
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.button').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });

        const allArrows = document.querySelectorAll('.button img');
        allArrows.forEach(arrow => {
            arrow.style.transform = 'rotate(0deg)';
        });
    });

    // Gestion du carrousel
    const images = document.querySelectorAll('.carrousel img');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        // Mettre à jour les points
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }

    // Clic sur les points pour changer d'image
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            currentIndex = i;
            showImage(currentIndex);
        });
    });

    // Afficher la première image au chargement
    showImage(0);
});
