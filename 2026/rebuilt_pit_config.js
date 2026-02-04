var config_data = `
{
    "dataFormat": "tsv",
    "title": "Rebuilt Scouting 2026",
    "page_title": "Rebuilt",
    "pitConfig": "true",
    "prematch": [
        {
            "name": "Event",
            "code": "e",
            "type": "text",
            "size": 5,
            "maxSize": 5,
            "defaultValue": "2026milac"
        },
         {
            "name": "Scouter Initials",
            "code": "s",
            "type": "text",
            "size": 5,
            "maxSize": 5
        },
        {
            "name": "Team Number",
            "code": "t",
            "type": "number"
        },
        {
            "name": "Dimensions",
            "code": "dmn",
            "type": "text"
        },
        {
            "name": "Weight",
            "code": "lbs",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Drivetrain",
            "code": "dvt",
            "type": "radio",
            "choices": {
                "s": "Swerve<br>",
                "t": "Tank<br>",
                "m": "Mechanum<br>",
                "o": "Other"
            },
            "defaultValue": "s"
        },
        {
            "name": "Can Intake Fuel From",
            "code": "int",
            "type": "radio",
            "choices": {
                "g": "Ground<br>",
                "o": "Outpost<br>",
                "b": "Both<br>",
                "n": "None"
            },
            "defaultValue": "n"
        },
        {
            "name": "Can Score Fuel In Hub?",
            "code": "hub",
            "type": "bool"
        },
        {
            "name": "Can Climb In Auto?",
            "code": "auc",
            "type": "bool"
        },
        {
            "name": "Highest Endgame Hang Level",
            "code": "hng",
            "type": "radio",
            "choices": {
                "1": "L1<br>",
                "2": "L2<br>",
                "3": "L3<br>",
                "n": "None"
            }
        },
        {
            "name": "Max Fuel Capacity",
            "code": "mfc",
            "type": "number"
        },
        {
            "name": "Comments",
            "code": "com",
            "type": "text",
            "size": 20,
            "maxSize": 250
        },
        {
            "name": "Took a picture?",
            "code": "pic",
            "type": "bool"
        }
    ],
    "Auto": [],
    "teleop": [],
    "endgame": [],
    "postmatch": []
}`;
