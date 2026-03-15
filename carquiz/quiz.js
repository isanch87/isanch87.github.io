function gradeQuiz()
{

var score = 0;
var output = "<h3>Quiz Results</h3>";

if(document.getElementById("ford").checked == true)
{
    output += "Question 1: Correct<br>";
    score++;
}
else
{
    output += "Question 1: Wrong<br>";
}

if(document.getElementById("ferrari").checked == true)
{
    output += "Question 2: Correct<br>";
    score++;
}
else
{
    output += "Question 2: Wrong<br>";
}

if(document.getElementById("explorer").checked == true &&
   document.getElementById("tahoe").checked == true &&
   document.getElementById("camry").checked == false &&
   document.getElementById("civic").checked == false)
{
    output += "Question 3: Correct<br>";
    score++;
}
else
{
    output += "Question 3: Wrong<br>";
}

if(document.getElementById("tesla").checked == true &&
   document.getElementById("rivian").checked == true &&
   document.getElementById("lucid").checked == true &&
   document.getElementById("toyota").checked == false)
{
    output += "Question 4: Correct<br>";
    score++;
}
else
{
    output += "Question 4: Wrong<br>";
}

output += "<br><b>Your Score: " + score + " / 4</b>";

document.getElementById("output").innerHTML = output;

}