import { MazeFactory } from './MazeFactory.js';
import { Room, Door, Wall, Maze } from './MazeComponents.js';

export class EnchantedMazeFactory extends MazeFactory {
    makeMaze() {
        return new Maze();
    }

    makeWall() {
        return new EnchantedWall();
    }

    makeRoom(roomNo) {
        const spell = this.castSpell();
        return new EnchantedRoom(roomNo, spell);
    }

    makeDoor(room1, room2) {
        return new EnchantedDoor(room1, room2);
    }

    castSpell() {
        // Return a magical spell for the enchanted room
        return "Alohomora";
    }
}

class EnchantedRoom extends Room {
    constructor(roomNo, spell) {
        super(roomNo);
        this.spell = spell;
        // Additional enchanted room-specific implementation
    }
}

class EnchantedDoor extends Door {
    constructor(room1, room2) {
        super(room1, room2);
        // Additional enchanted door-specific implementation
    }
}

class EnchantedWall extends Wall {
    // Additional enchanted wall-specific implementation
}
