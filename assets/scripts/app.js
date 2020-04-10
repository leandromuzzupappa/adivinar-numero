const overlay = document.querySelector('.overlay');

// Abrir y cerra popups
const openPopup = (id, text = 'hola') => {
    let popup = document.getElementById(id);
    let msg = popup.children[0].innerHTML = text;
    console.log(msg);

    Object.assign(popup.style, {
        transition: 'all .3s',
        top: '40px',
        opacity: 1,
        pointerEvents: 'all',
    });
    Object.assign(overlay.style, {
        transition: 'all .2s',
        opacity: 1,
        pointerEvents: 'all',
    });
};
const closePopup = id => {
    let popup = document.getElementById(id);

    if (popup === null) {
        popup = document.querySelector('.msgPop');
    }

    Object.assign(popup.style, {
        transition: 'all .3s',
        top: '-100%',
        opacity: 0,
        pointerEvents: 'none',
    });
    Object.assign(overlay.style, {
        transition: 'all .2s',
        opacity: 0,
        pointerEvents: 'none',
    });
};

overlay.addEventListener('click', () => {
    closePopup();
});

const initGame = () => {
    let intentos = 0;
    let input = document.querySelector('#ingresarNumero');
    let enviarNumero = document.querySelector('#enviarNumero');

    let Numero = Math.floor(Math.random() * 21);
    console.log(Numero);
    

    enviarNumero.addEventListener('click', () => {
        intentos++
        numeroIngresado = parseInt(input.value);

        if ( numeroIngresado === Numero ) {
            if ( intentos < 3 ) {
                openPopup('presponse', 'Bueeena en menos de 3 intentos!!!');
            } else if ( intentos > 3 && intentos < 10 ) {
                openPopup('presponse', 'Buena! Te costo ' + intentos + 'pero bien.');
            } else if ( intentos > 10 ) {
                openPopup('presponse', 'Uff ' + intentos + 'intentos. Lo importante es haber ganado 🤷🏻‍♂️');
            }
            setTimeout(() => {
                window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }, 1200);
        }

        // numero ingresado > numero adivinar
        if (numeroIngresado > Numero && numeroIngresado < Numero + 3) {
            openPopup('presponse', 'Estuviste cerca pero te pasaste, volve a intentar!');
        } else if (numeroIngresado > Numero + 3) {
            openPopup('presponse', 'Te pasaste bastante, volve a intentar!');
        }
        // numero ingresado < numero adivinar
        if (numeroIngresado < Numero && numeroIngresado > Numero - 3) {
            openPopup('presponse', 'Estuviste cerca pero te falto, volve a intentar!');
        } else if (numeroIngresado < Numero - 3) {
            openPopup('presponse', 'Te falto bastante, volve a intentar!');
        }

        // numero no ingresado o numero ingresado > 20
        if (numeroIngresado > 21 || Number.isNaN(numeroIngresado)) {
            openPopup('presponse', 'No ingresaste ningún número o el número ingresado es mayor a 20');
        }
        
        console.log('intentos: ' + intentos);
        
    })
}
initGame();