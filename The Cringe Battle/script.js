/*
var matrix = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0]
];

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] == 0) {
			console.log(matrix[i][j] = "white");
		}
		
		if (matrix[i][j] == 1) {
			console.log(matrix[i][j] =  "green");
		}
		
		if (matrix[i][j] == 2) {
			console.log(matrix[i][j] = "yellow");
		}
		
		if (matrix[i][j] == 3) {
			console.log(matrix[i][j] = "red");
		}
		console.log(matrix[i][j]);
	}
	console.log("-------");
}
*/

/*
function draw() {
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
		
			if ( (x + y) % 2 == 0) {
				fill('black');
			}
			else {
				fill('white');
			}
			rect(x * side, y * side, side, side)
		}
	}
}
*/
/*
const side = 100;

function setup() {
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac')
}

function draw() {
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 0) {
				fill('gray');
			}
			else if (matrix[y][x] == 1) {
				fill('green');
			}

			else if (matrix[y][x] == 2) {
				fill('yellow');
			}

			else if (matrix[y][x] == 3) {
				fill('red');
			}

			else if (matrix[y][x] == 4) {
				fill('blue');
			}
			rect(x * side, y * side, side, side)
		}
	}
}
function generator(grCount, grEaterCount) {

for (let k = 0; k < grCount; k++) {
	let k1 = Math.round( Math.random() * (matrix.length - 1) );
	let k2 = Math.round( Math.random() * (matrix.length - 1) );
	matrix[k1][k2] = 1;

		if (matrix[k1][k2] == 0) {
			matrix[k1][k2] = 1;
		}
		else{
			k--;
		}
	}
}
*/

 let grassArr= [];
 let grassEatersArr= [];
 let mushroomArr = [];
 let creatorArr = [];
 let nestArr = [];
 let fishsnestArr = [];
 let fishsArr = [];
 let caviarArr = [];
 let predatorArr = [];
 let alligatorArr = [];
 let alBoneArr = [];
 let alBoneBaseArr = [];
 let alligatorBaseArr = [];
 let alligatorTaleArr = [];
 let secAlligatorArr = [];
 let secAlBoneArr = [];
 let secAlBoneBaseArr = [];
 let secAlligatorBaseArr = [];
 let secAlligatorTaleArr = [];
 let bulletArr = [];
 let pistolArr = [];
 let craterArr = [];

 var socket = io();

function keyPressed() {
	for (let i in pistolArr) {
		pistolArr[i].strike();
	}
}

matrix = [
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 25, 25, 25, 25, 25, 25],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 21, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 14, 16, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
 ]

 function setup(){

	const side = 23;


	frameRate(15);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	noStroke();

	var weath = 'winter';
	
	//! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEatersCountElement = document.getElementById('grassEatersCount');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);
    socket.on("weather", function (data)
    {
        weath = data;
    })
 	
	   function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
		grassCountElement.innerText = data.grassCounter;
		grassEatersCountElement.innerText = data.grassEatersCounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                        if(weath == "spring")
                        {
                            fill("green")
                        }
                        else if(weath == "summer")
                        {
                            fill("black");
                        }
                        else if(weath == "winter")
                        {
                            fill("white")
                        }
                        else if(weath == "autumn")
                        {
                            fill("#4dffa6")
						}
				}
						else if (matrix[y][x] == 2){
							fill("#ffad00");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 3){
							fill("#c63535");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 4) {
							fill("black");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 5) {
							fill("#9a4b00");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 6) {
							fill("#9a4b00");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 0) {
							fill("#acacac");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 23) {
							fill("#ccc");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 24) {
							fill("#303030");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 25) {
							fill("#acacac");
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 7) {
							fill("#4b90ff")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 8) {
							fill("#88ebfd")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 9) {
							fill("#88ebfd")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 10) {
							fill("#ff884d")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 11) {
							fill("#ff4928")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 12) {
							fill("#480c00")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 13) { /// Al.
							fill("#005e00")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 14) { /// Al.Base
							fill("#003e00")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 15) { /// Al. Bone
							fill("#4b90ff")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 16) { /// Al.Tale
							fill("#001e00")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 17) { /// Al.Base Bone
							fill("#4b90ff")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 18) { /// secAl.
							fill("#5e0000")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 19) { /// secAl.Base
							fill("#3e0000")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 20) { /// secAl. Bone
							fill("#4b90ff")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 21) { /// secAl.Tale
							fill("#1e0000")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 22) { /// secAl.Base Bone
							fill("#1e0000")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 26) {
							fill("#303030")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 27) {
							fill("yellow")
							rect(x * side, y * side, side, side);
						}
						else if (matrix[y][x] == 28) {
							fill("red")
							rect(x * side, y * side, side, side);
						}
				}
            }
        }
	}
	socket.on("send matrix", drawCreatures)
	/* for(let i in grassArr){
		 grassArr[i].mul();
	 }
	 for(let i in mushroomArr){
		 mushroomArr[i].mul();
	 }
	 for (let i in nestArr) {
		 nestArr[i].mul();
	 }
	 for (let i in fishsnestArr) {
		 fishsnestArr[i].mul();		 
	 }
	 for (let i in creatorArr) {
		 creatorArr[i].mul1();
		 creatorArr[i].mul2();
	 }
	 for (let i in grassEatersArr) {
		 grassEatersArr[i].eat(); 
	 }
	 for (let i in fishsArr) {
		fishsArr[i].mul();
	 }
	 for (let i in caviarArr) {
		caviarArr[i].mul();
	 }
     for (var i = 0; i <= 2; i++) {
		 for (let i in predatorArr) {
			 predatorArr[i].eat();
		 }
     }
		 for (let i in alligatorArr) {
			 alligatorArr[i].move();
		 }
		 for (let i in alBoneArr) {
			 alBoneArr[i].NaN();
		 }
		 for (let i in alBoneBaseArr) {
			 alBoneBaseArr[i].NaN();
		 }
		 for (let i in alligatorBaseArr) {
			 alligatorBaseArr[i].move();
		 }
		 for (let i in alligatorTaleArr) {
			 alligatorTaleArr[i].move();
		 }
		 for (let i in secAlligatorArr) {
			 secAlligatorArr[i].move();
		 }
		 for (let i in secAlBoneArr) {
			 secAlBoneArr[i].NaN();
		 }
		 for (let i in secAlBoneBaseArr) {
			 secAlBoneBaseArr[i].NaN();
		 }
		 for (let i in secAlligatorBaseArr) {
			 secAlligatorBaseArr[i].move();
		 }
		 for (let i in secAlligatorTaleArr) {
			 secAlligatorTaleArr[i].move();
		 }
     for (var i = 0; i <= 5; i++) {
		 for (let i in bulletArr) {
			 bulletArr[i].destroy();
		 }
     }
	 /*for (let i in pistolArr) {
		 pistolArr[i].mul();
	 }
     for (var i = 0; i <= 8; i++) {
		 for (let i in craterArr) {
			 craterArr[i].cr();
		 }
     }
 } */

 function kill() {
 	socket.emit("kill")
 }