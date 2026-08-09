// Логика выпадающего меню
        const menuBtn = document.getElementById('menuBtn');
        const dropdown = document.getElementById('dropdown');

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        // Закрытие меню при клике в любое другое место
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });