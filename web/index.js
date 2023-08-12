import {drawMap} from './ui/hex-grid.js'
import {Game} from './game/game.js'

const settings = {
    width: 15,
    height: 11
};

const game = new Game();

function generateMap(settings) {
  const mapWidth = settings.width;
  const mapHeight = settings.height;

  const map = [];
  let width = mapWidth;
  for (let y = 0; y < mapHeight; y++) {
    const row = [];
    map[y] = row;
    for (let x = 0; x < width; x++) {
        const tile = {
          x: x,
          y: y,
          map: map
        };
        tile.onclick = e => {
          console.log(tile);
        }
        tile.onmouseover = e => {
          console.log(tile);
        }
        row[x] = tile;
    }
  }

  return map;
}

function setup() {
  const svg = document.getElementById("svg");
  game.map = generateMap(settings);
  
  drawMap(game.map, svg);
}

document.addEventListener("DOMContentLoaded", setup);
