import {Cell} from "./modules/cell.js";
import {createField} from "./modules/render.js";
import {Field} from "./modules/Field.js";
import {Life} from "./modules/Life.js";





const game = new Life({
    el: '#life',
    width: document.querySelector('input[name=width]').value,
    height: document.querySelector('input[name=height]').value,
    scale: 90,
});

game.init()



document.querySelector('#start').addEventListener('click', function (e) {


})


document.querySelector('#info').addEventListener('click', function (e) {
    console.log(game)
    game.newGeneration()
})
