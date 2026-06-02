// selectores
const copyrightTitle = document.querySelector('#copyright-titulo');

// functions
function copyrightYear() {
    const year = new Date().getFullYear();

    copyrightTitle.textContent = `Colegio Solaris ${year}`;
};

copyrightYear();