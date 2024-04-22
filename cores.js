document.addEventListener('DOMContentLoaded', function() {
    const bunnyPaperImages = document.querySelectorAll('.bunnypaper img');
    const defaultColor = 'azulbeta'; 


    bunnyPaperImages.forEach(image => {
        image.style.display = 'none';
    });

 
    const defaultPaperImage = document.querySelector(`.bunnypaper [data-color="${defaultColor}"]`);
    if (defaultPaperImage) {
        defaultPaperImage.style.display = 'block';
    }

    const bunnyIcons = document.querySelectorAll('.bunnyicon img');

    
    bunnyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            const paperImage = document.querySelector(`.bunnypaper [data-color="${color}"]`);
            
   
            bunnyPaperImages.forEach(image => {
                image.style.display = 'none';
            });

      
            if (paperImage) {
                paperImage.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bunnyIcons = document.querySelectorAll('.bunnyicon img');

    bunnyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os ícones
            bunnyIcons.forEach(icon => {
                icon.classList.remove('selected');
            });
            // Adiciona a classe 'selected' ao ícone clicado
            this.classList.add('selected');
        });
    });
});