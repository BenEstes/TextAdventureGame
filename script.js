// Set up rooms to have surroundingRooms object, room description, interactables
/*
let Room = function(roomNumber, roomItems, surroundingRooms, ghostSpawn){
this.roomnumber = roomNumber,
this.roomItems = roomItems,
this.surroundingRooms = surroundingRooms,
this.ghostSpawn = ghostSpawn;
}

new Room(0, ['Flashlight', 'Radio', 'EMF Reader', 'UV Light', 'Thermometer', 'Spirit Box', 'Video Camera'], [2, 3, 4, 1], false);
new Room(1, ['Bone', 'Some other Items'], [-1, 0, -1, -1], true);
new Room(2, ['VooDoo Doll', 'Some other Items'], [-1, -1, 0, -11], false);
new Room(3, ['Ouija Board', 'Some other Items'], [-1, -1, -1, 0], false);
new Room(4, ['Front Door Key', 'Some other Items'], [0, -1, -1, -1], false);
*/
let room0, room1, room2, room3, room4, gamePlaying, userInput;
let currentRoom = {};


room0 = {
    roomNumber: 0,
    roomItems: ['Flashlight', 'Radio', 'EMF Reader', 'UV Light', 'Thermometer', 'Spirit Box', 'Video Camera'],
    surroundRooms: [room2, room3, room4, room1],
    ghostSpawn: false
}

room1 = {
    roomNumber: 1,
    roomItems: ['Bone', 'Some other Items'],
    surroundRooms: [-1, room0, -1, -1],
    ghostSpawn: true
}
room2 = {
    roomNumber: 2,
    roomItems: ['VooDoo Doll', 'Some other Items'],
    surroundRooms: [-1, -1, room0, -1],
    ghostSpawn: false
}
room3 = {
    roomNumber: 3,
    roomItems: ['Ouija Board', 'Some other Items'],
    surroundRooms: [-1, -1, -1, room0],
    ghostSpawn: false
}
room4 = {
    roomNumber: 4,
    roomItems: ['Front Door Key', 'Some other Items'],
    surroundRooms: [room0, -1, -1, -1],
    ghostSpawn: false
}

currentRoom = room0;


alert(`Welcome to Ghost Hunter!
You are standing inside the lobby of a house that has seen some recent paranormal activity. 
look around and find the ghost!`)


    // if statements that moves player from room to room
    let getNextRoom = (currentR, direction) => {
        switch (direction) {
            case 'north': currentRoom = currentR.surroundRooms[0]
                alert('You have moved into a room to your north.')
                break;
            case 'east': currentRoom = currentR.surroundRooms[1]
                alert('You have moved into a room to your east.')
                break;
            case 'south': currentRoom = currentR.surroundRooms[2]
                alert('You have moved into a room to your south.')
                break;
            case 'west': currentRoom = currentR.surroundRooms[3]
                alert('You have moved into a room to your west.')
                break;
        }
    }

    if (userInput.includes('north', 'forward')) {
        getNextRoom(currentRoom, 'north');
    } else if (userInput.includes('east', 'right')) {
        getNextRoom(currentRoom, 'east');
    } else if (userInput.includes('south', 'back')) {
        getNextRoom(currentRoom, 'south');
    } else if (userInput.includes('west', 'left')) {
        getNextRoom(currentRoom, 'west');
    }

    // look around function that describes whats near a player
    let getSurroundings = (currentR) => {
        alert(currentR.roomItems);
    }


    if (userInput.includes('look', 'around', 'search')) {
        getSurroundings(currentRoom);
    }





// Backpack object with ghost hunting items

// Activity monitor?? 

// Define ghost types and interaction with items

// Journal??? (Reading up on ghost types)

// Ghost hunts

// Animations for ghost hunt (flickering flashlight in the DOM)

// Player sanity?? Activity/hunting more often with lower sanity
