var config_data = `

{
  "dataFormat": "tsv",
  "title": "Rebuilt Scouting 2026",
  "page_title": "Rebuilt",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "si",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "ev",
      "type": "event",
      "defaultValue": "2026mimus",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "ml",
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
      "code": "mn",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "rb",
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
      "code": "tn",
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
    { "name": "Dumps 8",
      "code": "ad8",
      "type": "bool"
    },
    { "name": "Shot 1",
      "code": "as1",
      "type": "counter"
    },
    { "name": "Shot 5",
      "code": "as5",
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
     { "name": "Won Auto?",
      "code": "taw",
      "type": "bool"
    },
    { "name": "Shot 1",
      "code": "ts1",
      "type": "counter"
    },
    { "name": "Shot 5",
      "code": "ts5",
      "type": "counter"
    },
     { "name": "Missed Fuel",
      "code": "tmf",
      "type": "counter"
    },
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
      "defaultValue": "bf"
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
    { "name": "Downtime Actions",
      "code": "dta",
      "type":"radio",
      "choices": {
        "D": "Defence<br>",
        "P": "Pickup Fuel<br>",
        "B": "Both<br>",
        "N": "No Actions<br>"
      }
    },
    { "name": "Comments (Keep Breif)",
      "code": "cmm",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
