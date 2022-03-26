// 
weather = "winter"
//! Requiring modules  --  START
var Grass = require("./modules/class.grass.js");
var GrassEaters = require("./modules/class.grasseaters.js");
var AlBone = require("./modules/class.albone.js");
var AlBoneBase = require("./modules/class.albonebase.js");
var Alligator = require("./modules/class.alligator.js");
var AlligatorBase = require("./modules/class.alligatorbase.js");
var AlligatorTale = require("./modules/class.alligatortale.js");
var Bullet = require("./modules/class.bullet.js");
var Caviar = require("./modules/class.caviar.js");
var Crater = require("./modules/class.crater.js");
var Creator = require("./modules/class.creator.js");
var Fishs = require("./modules/class.fishs.js");
var FishsNest = require("./modules/class.fishsnest.js");
var LivingCreature= require("./modules/class.LIVING_CREATURE.js");
var Mushroom = require("./modules/class.mushroom.js");
var Nest = require("./modules/class.nest.js");
var Pistol = require("./modules/class.pistol.js");
var Predator = require("./modules/class.predator.js");
var SecAlBone = require("./modules/class.secalbone.js");
var SecAlBoneBase = require("./modules/class.secalbonebase.js");
var SecAlligator = require("./modules/class.secalligator.js");
var SecAlligatorBase = require("./modules/class.secalligatorbase.js");
var SecAlligatorTale = require("./modules/class.secalligatortale.js");

//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
grassEatersArr = [];
matrix = [];
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            }
            if (matrix[y][x] == 3) {
                mushroomArr.push(new Mushroom(x, y))
            }
            if (matrix[y][x] == 4) {
                creatorArr.push(new Creator(x, y))
            }
            if (matrix[y][x] == 2){
              grassEatersArr.push(new GrassEaters(x, y))
            }
            if (matrix[y][x] == 5) {
              nestArr.push(new Nest(x, y))
         }
         if (matrix[y][x] == 8) {
             fishsnestArr.push(new FishsNest(x, y))
        }
         if (matrix[y][x] == 10) {
             fishsArr.push(new Fishs(x, y))
         }
         if (matrix[y][x] == 11) {
             caviarArr.push(new Caviar(x, y))
         }
         if (matrix[y][x] == 12) {
             predatorArr.push(new Predator(x, y))
         }
         if (matrix[y][x] == 13) {
             alligatorArr.push(new Alligator(x, y))
         }
         if (matrix[y][x] == 14) {
             alligatorBaseArr.push(new AlligatorBase(x, y))
         }
         if (matrix[y][x] == 15) {
             alBoneArr.push(new AlBone(x, y))
         }
         if (matrix[y][x] == 17) {
             alBoneBaseArr.push(new AlBoneBase(x, y))
         }
         if (matrix[y][x] == 16) {
             alligatorTaleArr.push(new AlligatorTale(x, y))
         }
         if (matrix[y][x] == 18) {
             secAlligatorArr.push(new SecAlligator(x, y))
         }
         if (matrix[y][x] == 19) {
             secAlligatorBaseArr.push(new SecAlligatorBase(x, y))
         }
         if (matrix[y][x] == 20) {
              secAlBoneArr.push(new SecAlBone(x, y))
         }
         if (matrix[y][x] == 22) {
             secAlBoneBaseArr.push(new SecAlBoneBase(x, y))
         }
         if (matrix[y][x] == 21) {
             secAlligatorTaleArr.push(new SecAlligatorTale(x, y))
         }
         if (matrix[y][x] == 26) {
             pistolArr.push(new Pistol(x, y))
         }
         if (matrix[y][x] == 27) {
             bulletArr.push(new Bullet(x, y))
         }
         if (matrix[y][x] == 28) {
             craterArr.push(new Crater(x, y))
         }
        }	   
    }
}
matrixGenerator(20, 1, 1);
//! Creating MATRIX -- END

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEaters = new GrassEaters(x, y);
                grassEatersArr.push(grassEaters);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
        }
    }
}

function game() {
    if (grassArr[0] !== undefined) {
        if(weath != 'autumn') {
            for (var i in grassArr) {
                grassArr[i].mul();
            }
        }
        
    }
    if (grassEatersArr[0] !== undefined) {
        for (var i in grassEatersArr) {
            grassEatersArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassArr.length
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)

//// Add event
function kill() {
    grassArr = [];
    grassEatersArr = []
    meatEaterArr = []
    allEaterArr = []
    hunterArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
}
io.on('connection', function (socket) {
    creatingObjects();
    socket.on("kill", kill);
});
////   Create static Json
var statistics = {};

setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEaters = grassEatersArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000)