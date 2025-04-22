// Récupérer les éléments du dom 
const touches = [...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.key;
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listekeycode.includes(valeur)) {
        switch (valeur) {
            case 'Backspace': // Correspond à la touche Retour arrière
                ecran.textContent = "";
                break;
            case 'Enter': // Correspond à la touche Entrée
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})