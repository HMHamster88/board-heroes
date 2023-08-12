import { Player } from "./player.js";
import { Creature } from "./creature.js";
import { Range } from "./misc/range.js";
import { CreatureImages } from "./creature-images.js"
import { Troop } from "./troop.js";

export class Game {
    constructor() {
        const player1 = new Player('Player 1', 'rgb(255, 0, 0)');
        const player2 = new Player('Player 2', 'rgb(0, 0, 255)');
        this.players = [
            player1,
            player2
        ];
        var pikeman = new Creature('Pikeman', new CreatureImages('images/creatures/pikeman/avatar.gif'), 4, 5, new Range(1, 3), 10, 4, 14, []);
        this.allCreatures = [
            pikeman
        ];
        player1.troops.push(new Troop(pikeman));
        player2.troops.push(new Troop(pikeman));
    }
    
}