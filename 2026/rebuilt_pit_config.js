var config_data = `
{
    "dataFormat": "tsv",
    "title": "Rebuilt Scouting 2026",
    "page_title": "Rebuilt",
    "pitConfig": "true",
    "prematch": [
        {
            "name": "Team Number",
            "code": "TMN",
            "type": "number"
        },
        {
            "name": "Dimensions",
            "code": "DMN",
            "type": "text"
        },
        {
            "name": "Weight",
            "code": "LBS",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Drivetrain",
            "code": "DRV",
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
            "code": "ITF",
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
            "code": "HUB",
            "type": "bool"
        },
        {
            "name": "Can Climb In Auto?",
            "code": "AUC",
            "type": "bool"
        },
        {
            "name": "Highest Hang Level",
            "code": "HNG",
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
            "code": "MFC",
            "type": "number"
        },
        {
            "name": "Comments",
            "code": "COM",
            "type": "text",
            "size": 20,
            "maxSize": 250
        },
        {
            "name": "Took a picture?",
            "code": "PIC",
            "type": "bool"
        }
    ],
    "Auto": [],
    "teleop": [],
    "endgame": [],
    "postmatch": []
}`;
