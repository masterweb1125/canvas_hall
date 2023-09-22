var virtualHallJSON = [
	{
		"virtualHallId": "AADCBDE475BCF7B59C55BAAC1988FAF1DD15D7E5",
		"virtualHallName": "Hall 1",
		"tables": [
			{
				"active":true,
				"tableId": "AC892C8C9C5477FFE53F2A2AADB2CB11989A874E",
				"tableName": "I1",
				"width": 80,
				"height": 80,
				"shape": "octagonal",
                "expandX": true,
                "expandY": true,
                "lockRatio": true,
				"x": 600,
				"y": 100
			},
			{
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "roundRect",
                "expandX": false,
                "expandY": true,
                "lockRatio": false,
				"x": 720,
				"y": 100
			},		
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "roundRect",
                "expandX": true,
                "expandY": false,
                "lockRatio": false,
				"x": 520,
				"y": 100
			},	
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "image",
                "expandX": true,
                "expandY": true,
                "lockRatio": false,
                "url": "https://jslab.it/shapes/corner.svg",
				"x": 80,
				"y": 80
			},	
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "image",
                "expandX": true,
                "expandY": true,
                "lockRatio": false,
                "url": "https://jslab.it/shapes/door.svg",
				"x": 180,
				"y": 180
			},		
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "image",
                "expandX": true,
                "expandY": true,
                "lockRatio": false,
                "url": "https://jslab.it/shapes/double_door.svg",
				"x": 280,
				"y": 180
			},		
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "image",
                "expandX": true,
                "expandY": true,
                "lockRatio": false,
                "url": "https://jslab.it/shapes/wall.svg",
				"x": 180,
				"y": 280
			},		
            {
				"active":true,
				"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
				"tableName": "I2",
				"width": 80,
				"height": 80,
				"shape": "image",
                "expandX": true,
                "expandY": true,
                "lockRatio": false,
                "url": "https://jslab.it/shapes/window.svg",
				"x": 180,
				"y": 380
			},		
		]
	}
];
// https://jslab.it/shapes/door.svg
// https://jslab.it/shapes/double_door.svg
// https://jslab.it/shapes/wall.svg
// https://jslab.it/shapes/window.svg
// https://w7.pngwing.com/pngs/84/300/png-transparent-woman-beauty-salon-white-people-monochrome.png
var tables = [
	{
		"active":true,
		"tableId": "AC892C8C9C5477FFE53F2A2AADB2CB11989A874E",
		"tableName": "I1",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":"AADCBDE475BCF7B59C55BAAC1988FAF1DD15D7E5"
	},
	{
		"active":true,
		"tableId": "98BE6476E12A82D9441A4C47B7C895DEE0FA7C06",
		"tableName": "I2",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":"AADCBDE475BCF7B59C55BAAC1988FAF1DD15D7E5"
	},
	{
		"active":true,
		"tableId": "F69E599E34BF2084CD69CC3DB00850E7FBED13CA",
		"tableName": "I3",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":null
	},
	{
		"active":true,
		"tableId": "C615A5BA638C2CC2E00FD550F08144D119DE3598",
		"tableName": "I4",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":"AADCBDE475BCF7B59C55BAAC1988FAF1DD15D7E5"
	},
	{
		"active":true,
		"tableId": "0F40FF8F00A5B270DC4EF508F779F7D513E80870",
		"tableName": "I5",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":null
	},
	{
		"active":true,
		"tableId": "99DD8A4C91863A7FC72AC8305F6AAF7153F2A3A2",
		"tableName": "I6",
		"hallId": "C3AEE1B8BF886C1A13602D6E271F0CE7D7F727A5",
		"virtualHallId":null
	}	
];

var tablesDetail = [
    {
        "table": "B1",
        "x": 700,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "B1",
                "time": "20:30",
                "lastName": "BUSH",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "B2",
        "x": 850,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "B2",
                "time": "21:00",
                "lastName": "STAHEL",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "B3",
        "x": 700,
        "y": 200,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "B4",
        "x": 850,
        "y": 200,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "B5",
        "x": 700,
        "y": 340,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "B6",
        "x": 850,
        "y": 340,
        "shape": "round",
        "w": 100,
        "h": 100
    },
    {
        "table": "I1",
        "x": 60,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I1",
                "time": "20:00",
                "lastName": "BRUSEE",
                "color": "#2196f3",
                "covers": 3,
                "children": ""
            }
        ]
    },
    {
        "table": "I11",
        "x": 200,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I11",
                "time": "20:00",
                "lastName": "GUNSAV",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "I13",
        "x": 220,
        "y": 200,
        "shape": "rect",
        "w": 200,
        "h": 100
    },
    {
        "table": "I14",
        "x": 200,
        "y": 480,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I15",
        "x": 200,
        "y": 620,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I15",
                "time": "21:00",
                "lastName": "PLANN",
                "color": "#2196f3",
                "covers": 6,
                "children": ""
            }
        ]
    },
    {
        "table": "I16",
        "x": 200,
        "y": 760,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I16",
                "time": "20:30",
                "lastName": "RIGG",
                "color": "#2196f3",
                "covers": 8,
                "children": ""
            }
        ]
    },
    {
        "table": "I2",
        "x": 60,
        "y": 200,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I21",
        "x": 340,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I23",
        "x": 480,
        "y": 200,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I23",
                "time": "19:00",
                "lastName": "DI PAOLA",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            },
            {
                "table": "I23",
                "time": "20:30",
                "lastName": "ROSy",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "I24",
        "x": 340,
        "y": 480,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I25",
        "x": 340,
        "y": 620,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I25",
                "time": "21:00",
                "lastName": "PLANN",
                "color": "#2196f3",
                "covers": 6,
                "children": ""
            }
        ]
    },
    {
        "table": "I26",
        "x": 340,
        "y": 760,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I26",
                "time": "20:30",
                "lastName": "RIGG",
                "color": "#2196f3",
                "covers": 8,
                "children": ""
            }
        ]
    },
    {
        "table": "I3",
        "x": 60,
        "y": 340,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I3",
                "time": "19:30",
                "lastName": "MORTAR",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            },
            {
                "table": "I3",
                "time": "21:00",
                "lastName": "MONTAGUE",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            },
            {
                "table": "I3",
                "time": "22:30",
                "lastName": "PEARSON",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "I31",
        "x": 480,
        "y": 60,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I31",
                "time": "20:00",
                "lastName": "RE",
                "color": "#2196f3",
                "covers": 3,
                "children": ""
            }
        ]
    },
    {
        "table": "I34",
        "x": 480,
        "y": 480,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I35",
        "x": 480,
        "y": 620,
        "shape": "rect",
        "w": 100,
        "h": 100
    },
    {
        "table": "I36",
        "x": 480,
        "y": 760,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I36",
                "time": "20:30",
                "lastName": "RIGG",
                "color": "#2196f3",
                "covers": 8,
                "children": ""
            }
        ]
    },
    {
        "table": "I4",
        "x": 60,
        "y": 480,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I4",
                "time": "20:30",
                "lastName": "WU",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "I5",
        "x": 60,
        "y": 620,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I5",
                "time": "21:30",
                "lastName": "RAZE",
                "color": "#2196f3",
                "covers": 2,
                "children": ""
            }
        ]
    },
    {
        "table": "I6",
        "x": 60,
        "y": 760,
        "shape": "rect",
        "w": 100,
        "h": 100,
        "bookings": [
            {
                "table": "I6",
                "time": "20:30",
                "lastName": "RIGG",
                "color": "#2196f3",
                "covers": 8,
                "children": ""
            }
        ]
    }
]

var defaultParelData = {
    "active":true,
    "tableId": "--",
    "tableName": "--",
    "width": 80,
    "height": 80,
    "shape": "rect",
    "x": 0,
    "y": 0
}