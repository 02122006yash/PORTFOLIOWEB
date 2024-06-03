document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container2');
    const projects = document.getElementById('project');

    projects.addEventListener('click', () => {
        projects.style.backgroundColor = 'red';
        const projectcontent = `
        <div class="row-1">
            <div class="rows-div" id="tictac">
                <a href="tictac.html" target="_blank">PLAY TIC-TAC-TOE </a>
            </div>
            <div class="rows-div" id="rock">
                <a href="ROCKPAPERGAME.html" target="_blank">PLAY ROCK PAPER SCISSOR</a>
            </div>
            <div class="rows-div" id="date">
                <a href="DATE.html" target="_blank">WANT TO GO ON A DATE</a>
            </div>
        </div>
        <div class="row-2">
            <div class="rows-div" id="currency">
                <a href="currency.html" target="_blank">CURRENCY CONVERTER</a>
            </div>
            <div class="rows-div" id="pizza">
            <a href="PIZZA.html"target="_blank">PIZZA-HUT</a>
        </div>
            <div class="rows-div" id="Quiz">
                <a href="Quiz.html"target="_blank">CSS QUIZ</a>
            </div>
            <div class="rows-div" id="amazon">
                <a href="AMAZON.html" target="_blank">AMAZON</a>
            </div>
        </div>
        `;
        container.innerHTML = projectcontent;
    });
});
