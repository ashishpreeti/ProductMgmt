var Calculator = function () {

    function add(x , y) {
        return x + y;
    }

    return {
        add : add
    }
};

var calc = new Calculator();
var result = calc.add(3,4);
console.log("result is "+ result);

Calculator.subtract = function (x, y) {
    return x - y;
};

Calculator.prototype.divide = function (x, y) {
    return x /y;
};


//constructor
var Car = function (loc) {

};

//define functions using JSON syntax
Car.prototype = {
    move : function(loc) {
        return loc++;
    }
};


    var Car = function (name) {
            this.name = name;
        };

        Car.prototype.move = function () {
            return this.name += 1;
        };

        var Amy = function (loc) {
            Car.call(this, loc);
        };
        Amy.prototype = Object.create(Car.prototype);
        Amy.prototype.constructor = Amy;

        Amy.prototype.run = function () {
            return this.name +=2;
        };


        //Client Code -- delete this
        var amy = new Car(3);
        amy.move();

        var ben = new Amy(6);
        console.log(ben.name);
        console.log(ben.move());
        console.log(ben.run());



    var carlike = function (obj, loc) {
        obj.loc = loc;
        obj.move = function () {
            console.log("moving the car"+ obj.name);
            obj.loc++;
        };
        return obj;
    };

    var amy = carlike({name: "amy"}, 3);
    amy.move();

    var ben = carlike({name: 'ben'}, 5);
    ben.move();
