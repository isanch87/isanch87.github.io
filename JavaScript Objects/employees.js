// define the actions of the Employee object (method)
function printEmployee() {
    var name_line = "<td>" + this.name + "</td>";
    var title_line = "<td>" + this.title + "</td>";
    var phone_line = "<td>" + this.phone + "</td>";

    var row = "<tr>" + name_line + title_line + phone_line + "</tr>";
    document.write(row);
}

// define constructor
function Employee(name, title, phone) {
    this.name = name;
    this.title = title;
    this.phone = phone;
    this.printEmployee = printEmployee;
}

// create employee objects (ONLY ONCE)
var nick = new Employee("Nick", "Instructor", "(956) 872-3445");
var lisa = new Employee("Lisa Simpson", "Teacher", "(956) 333-1111");
var mike = new Employee("Mike Tyson", "Boxer", "(956) 787-2222");

// store full employee objects
var empArray = [nick, lisa, mike];

// print table rows
document.write("<table border='1'>");

for (var counter = 0; counter < empArray.length; counter++) {
    empArray[counter].printEmployee();
}

document.write("</table>");


// OPTIONAL: array of names only (separate array)
var nameArray = [nick.name, lisa.name, mike.name];

// sort names alphabetically
nameArray.sort();

// print sorted names
document.write("<br><b>Sorted Names:</b><br>");

for (var i = 0; i < nameArray.length; i++) {
    document.write(nameArray[i] + "<br>");
}