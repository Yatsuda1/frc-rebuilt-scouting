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
            "size": 9,
            "maxSize": 9,
            "defaultValue": "2026mimus"
        },
         {
            "name": "Scouter Initials",
            "code": "s",
            "type": "text",
            "size": 3,
            "maxSize": 3
        },
        {
            "name": "Team Number",
            "code": "ten",
            "type": "number"
        },
       {
            "name": "Team Name",
            "code": "tmn",
            "type": "text",
            "size": 20,
            "maxSize": 20
        },
        {
            "name": "Weight",
            "code": "lbs",
            "type": "number",
            "defaultValue": "60"
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
            "type": "number",
            "defaultValue": "15"
        },
         {
            "name": "Robot Style",
            "code": "sty",
            "type": "radio",
            "choices": {
                "S": "Shooter<br>",
                "T": "Turret<br>",
                "D": "WCP CC<br>",
                "K": "Kitbot"
            }
        },
        {
            "name": "Comments",
            "code": "com",
            "type": "text",
            "size": 20,
            "maxSize": 100
        },
        {
            "name": "Took a picture?",
            "code": "pic",
            "type": "bool"
        }
    ],
    "auto": [],
    "teleop": [],
    "endgame": [],
    "postmatch": []
}`;
