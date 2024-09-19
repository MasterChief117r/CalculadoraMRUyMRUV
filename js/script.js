// Animación del auto
function animateCar() {
    const car = document.querySelector('.car');
    const header = document.querySelector('header');

    let position = -50;

    function move() {
        const headerWidth = header.offsetWidth;
        position += 2;
        car.style.transform = `translateX(${position}px)`;

        if (position > headerWidth) {
            position = -50; 
        }

        requestAnimationFrame(move);
    }

    move();
}

// Inicia la animación del auto cuando se carga la página
window.addEventListener('load', animateCar);

/*_______________________________________________________________________________*/
// function generateMathAnimation() {
//     const operators = ['+', '-', '×', '÷'];
//     const container = document.getElementById('math-animations');
//     container.innerHTML = '';

//     for (let i = 0; i < 5; i++) {
//         const mathItem = document.createElement('div');
//         mathItem.classList.add('math-item');
//         mathItem.style.animationDelay = `${i * 0.5}s`;

//         const num1 = Math.floor(Math.random() * 10) + 1;
//         const num2 = Math.floor(Math.random() * 10) + 1;
//         const operator = operators[Math.floor(Math.random() * operators.length)];

//         let result;
//         switch (operator) {
//             case '+':
//                 result = num1 + num2;
//                 result = (num1 / num2).toFixed(2);
//                 break;
//         }

//         mathItem.textContent = `${num1} ${operator} ${num2} = ${result}`;
//         container.appendChild(mathItem);
//     }
// }            break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '×':
//                 result = num1 * num2;
//                 break;
//             case '÷':
    

// // Generar nuevas animaciones cada 5 segundos
// setInterval(generateMathAnimation, 5000);

// // Iniciar las animaciones cuando se carga la página
// window.addEventListener('load', () => {
//     animateCar();
//     generateMathAnimation();
// });

/*_____________________________________MRU CALCULOS______________________________________*/
//----------DISTANCIA--------------
document.getElementById('mru-distancia').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidad = parseFloat(document.getElementById('mru-velocidad').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo').value);
    const distancia = velocidad * tiempo;
    document.getElementById('mru-distancia-resultado').innerHTML = `La distancia recorrida es ${distancia} metros.`;
});

//----------VELOCIDAD--------------
document.getElementById('mru-velocidad-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const distancia = parseFloat(document.getElementById('mru-distancia-input').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo-velocidad').value);
    const velocidad = distancia / tiempo;
    document.getElementById('mru-velocidad-resultado').innerHTML = `La velocidad es ${velocidad} m/s.`;
});

//----------TIEMPO--------------
document.getElementById('mru-tiempo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const distancia = parseFloat(document.getElementById('mru-distancia-tiempo').value);
    const velocidad = parseFloat(document.getElementById('mru-velocidad-tiempo').value);
    const tiempo = distancia / velocidad;
    document.getElementById('mru-tiempo-resultado').innerHTML = `El tiempo es ${tiempo} segundos.`;
});


/*_____________________________________MRUV CALCULOS______________________________________*/
//----------VELOCIDAD FINAL--------------
document.getElementById('mruv-velocidad-final').addEventListener('submit', function(e){
    e.preventDefault();
    const velocidadInicial = parseFloat(document.getElementById('mruv-velocidad-inicial').value);
    const aceleracion = parseFloat(document.getElementById('mruv-aceleracion').value);
    const tiempo = parseFloat(document.getElementById('mruv-tiempo').value);
    const velocidadFinal = velocidadInicial + (aceleracion * tiempo);
    document.getElementById('mruv-velocidad-final-resultado').innerHTML = `La velocidad final es ${velocidadFinal} m/s.`;
});

//----------DISTANCIA--------------
document.getElementById('mruv-distancia-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidadInicial = parseFloat(document.getElementById('mruv-velocidad-inicial-distancia').value);
    const aceleracion = parseFloat(document.getElementById('mruv-aceleracion-distancia').value);
    const tiempo = parseFloat(document.getElementById('mruv-tiempo-distancia').value);
    const distancia = velocidadInicial * tiempo + 0.5 * aceleracion * Math.pow(tiempo, 2);
    document.getElementById('mruv-distancia-resultado').innerHTML = `La distancia recorrida es ${distancia} metros.`;
});

//----------DISTANCIA--------------
document.getElementById('mruv-aceleracion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidadFinal = parseFloat(document.getElementById('mruv-velocidad-final-aceleracion').value);
    const velocidadInicial = parseFloat(document.getElementById('mruv-velocidad-inicial-aceleracion').value);
    const tiempo = parseFloat(document.getElementById('mruv-tiempo-aceleracion').value);
    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;
    document.getElementById('mruv-aceleracion-resultado').innerHTML = `La aceleración es ${aceleracion} m/s².`;
});