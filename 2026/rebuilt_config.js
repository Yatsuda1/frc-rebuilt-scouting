var config_data = `
{
  "dataFormat": "tsv",
  "title": "Rebuilt Scouting 2026",
  "page_title": "Rebuilt",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026milac",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Dumps 8",
      "code": "d8",
      "type": "counter"
    },
    { "name": "Dumps 100%",
      "code": "d1",
      "type": "counter"
    },
    { "name": "Dumps 50%",
      "code": "d5",
      "type": "counter"
    },
    { "name": "Dumps 25%",
      "code": "d2",
      "type": "counter"
    },
     { "name": "Missed Fuel",
      "code": "m1",
      "type": "counter"
    },
     { "name": "Climbed to L1",
      "code": "ac",
      "type": "bool"
    }
      ],
  "teleop": [
    { "name": "Dumps 8",
      "code": "d8",
      "type": "counter"
    },
    { "name": "Dumps 100%",
      "code": "d1",
      "type": "counter"
    },
    { "name": "Dumps 50%",
      "code": "d5",
      "type": "counter"
    },
    { "name": "Dumps 25%",
      "code": "d2",
      "type": "counter"
    },
     { "name": "Missed Fuel",
      "code": "m1",
      "type": "counter"
    },  ],
  "endgame": [
    { "name": "Tower Climb Timer",
      "code": "eb",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "L1": "Level 1 Climb<br>",
        "L2": "Level 2 Climb<br>",
        "L3": "Level 3 Climb<br>",
        "bf": "Failed Climb<br>",
        "bx": "Not attempted"
      },
      "defaultValue": "2"
    }
  ],
  "postmatch": [
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
