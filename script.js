document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('li');
            const menuItems = parent.querySelectorAll('.menu');

            menuItems.forEach(item => {
                if (item.style.display === 'none' || item.style.display === '') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Rotation de la flèche
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = img.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    });

    // Fermer les menus en cliquant ailleurs
    document.addEventListener('click', function() {
        const allMenuItems = document.querySelectorAll('.menu');
        allMenuItems.forEach(item => {
            item.style.display = 'none';
        });

        const allArrows = document.querySelectorAll('.button img');
        allArrows.forEach(arrow => {
            arrow.style.transform = 'rotate(0deg)';
        });
    });
});
