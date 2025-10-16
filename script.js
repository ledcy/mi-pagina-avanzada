document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggler = document.getElementById('theme-toggler');
    
    const body = document.body;

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    themeToggler.addEventListener('click', toggleTheme);

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    const envioInfo = document.getElementById("button");
    const contacto = document.getElementById("contacto")

    envioInfo.addEventListener("click", function(){
        alert("Se ha enviado la información");
        contacto.reset();
    })

});