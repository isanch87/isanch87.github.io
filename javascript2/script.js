// display method
function printCar() {
    return "<tr>" +
        "<td>" + this.year + "</td>" +
        "<td>" + this.make + "</td>" +
        "<td>" + this.model + "</td>" +
        "<td>" + this.engine + "</td>" +
        "<td>" + this.type + "</td>" +
    "</tr>";
}

// constructor (5 attributes)
function Car(year, make, model, engine, type) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.type = type;
    this.printCar = printCar;
}

// objects
var car1 = new Car("2008", "Nissan", "350Z", "V6", "Coupe");
var car2 = new Car("2011", "Hyundai", "Genesis Coupe 3.8", "V6 3.8L", "Coupe");
var car3 = new Car("2004", "Ford", "Mustang V6", "V6 3.8L", "Coupe");
var car4 = new Car("2004", "BMW", "X3", "Inline-6", "SUV");
var car5 = new Car("2009", "Ford", "F-150 Single Cab", "V8", "Truck");

// array
var carArray = [car1, car2, car3, car4, car5];

// build table
document.write("<table>");

// header
document.write("<tr><th>Year</th><th>Make</th><th>Model</th><th>Engine</th><th>Type</th></tr>");

// rows
for (var i = 0; i < carArray.length; i++) {
    document.write(carArray[i].printCar());
}

document.write("</table>");