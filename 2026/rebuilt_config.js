var config_data = `
{
  "dataFormat": "tsv",
  "title": "Rebuilt Scouting 2026",
  "page_title": "Rebuilt",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "sct",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "evn",
      "type": "event",
      "defaultValue": "2026milac",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "lvl",
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
      "code": "num",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "rob",
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
      "code": "team",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2026/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "alz",
      "type": "bool"
    },
    { "name": "Dumps 8",
      "code": "au8",
      "type": "counter"
    },
    { "name": "Dumps 100%",
      "code": "ad1",
      "type": "counter"
    },
    { "name": "Dumps 50%",
      "code": "ad5",
      "type": "counter"
    },
    { "name": "Dumps 25%",
      "code": "ad2",
      "type": "counter"
    },
     { "name": "Missed Fuel",
      "code": "amf",
      "type": "counter"
    },
     { "name": "Climbed to L1",
      "code": "ac1",
      "type": "bool"
    }
      ],
  "teleop": [
    { "name": "Dumps 8",
      "code": "td8",
      "type": "counter"
    },
    { "name": "Dumps 100%",
      "code": "td1",
      "type": "counter"
    },
    { "name": "Dumps 50%",
      "code": "td5",
      "type": "counter"
    },
    { "name": "Dumps 25%",
      "code": "td2",
      "type": "counter"
    },
     { "name": "Missed Fuel",
      "code": "tm1",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Tower Climb Timer",
      "code": "ect",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "efs",
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
    { "name": "Downtime Action",
      "code": "dow",
      "type": "text",
      "size": 15,
      "maxSize": 150
    },
    { "name": "Comments",
      "code": "cmm",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
