// selectores
const copyrightTitle = document.querySelector('#copyright-titulo');

// functions
function copyrightYear() {
    year = new Date().getFullYear();

    copyrightTitle.textContent = `Colegio Solarios ${year}`;
};

copyrightYear();