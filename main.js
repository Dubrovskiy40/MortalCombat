const player1 = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['нож', 'кулак', 'шляпа',],
    attack: function () {
        console.log(this.name +' Fight...');
    }
};
const player2 = {
    name: 'Sonia',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['нож', 'кулак', 'шляпа',],
    attack: function () {
        console.log(this.name +' Fight...');
    }
};

function createPlayer(user, name, hp, img) {
    const $player1 = document.createElement('div');
    $player1.classList.add(user);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life  = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name; 

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = img;
    $img.alt = name;



    $player1.appendChild($character);
    $player1.appendChild($progressbar);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);
    
    const $arenas  = document.querySelector('.arenas');
    $arenas.appendChild($player1);
}

createPlayer('player1', 'Scorpion', 50, player1.img);
createPlayer('player2', 'Sonya', 80, player1.img);
