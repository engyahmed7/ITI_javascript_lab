// Q1

alert("Question 1");

var sum=0;
var avg=0;
var arr=[];
var n=prompt("Enter the number of values you want to enter");
for(var i=0;i<n;i++)
{
    arr[i]=prompt("Enter the value");
    sum+=parseInt(arr[i]);
    avg=sum/n;
}
document.write(`Sum of the values is ${sum} <br>`);
document.write(`Average of the values is ${avg} <br>`);
document.write(`<br> <hr> <br>`);
console.log("Sum of the values is "+sum);
console.log("Average of the values is "+avg);

//Q2

alert("Question 2");
var contacts=[];
var operation=prompt("Enter the operation you want to perform");
while(operation!="quit")
{
    if(operation=="add")
    {
        var name=prompt("Enter the name of the contact");
        var number=prompt("Enter the number of the contact");
        var contact={
            name:name,
            number:number
        };
        contacts.push(contact);
        console.log(contacts);
    }
    else if(operation=="search")
    {
        var search=prompt("Enter the name or number you want to search");
        var result=contacts.filter(contact => contact.name==search || contact.number==search);
        console.log(result);
        if(search == null){
            break;
        }
        if(result.length==0)
        {
            alert("Name or number not found");
            continue;
        }
        document.write("Name: "+result[0].name+"<br>");
        document.write("Number: "+result[0].number+"<br>");
        document.write(`<br> <hr> <br>`);
    }
    operation=prompt("Enter the operation you want to perform");
}


// Bouns

alert("Bouns");

var shape = prompt("Enter the name of the shape");
shape=shape.toLowerCase();
switch(shape)
{
    case "circle":
        var radius = prompt("Enter the radius");
        var area = Math.PI * radius * radius;
        console.log(`Area is : ${area}`);
        break;
    case "rectangle":
        var length = prompt("Enter the length");
        var width = prompt("Enter the width");
        var area = length * width;
        console.log(`Area is : ${area}`);
        break;
    case "square":
        var side = prompt("Enter the side");
        var area = side * side;
        console.log(`Area is : ${area}`);
        break;
    case "triangle":
        var base = prompt("Enter the base");
        var height = prompt("Enter the height");
        var area = 0.5 * base * height;
        console.log(`Area is : ${area}`);
        break;
    case "tarallelogram":
        var base = prompt("Enter the base");
        var height = prompt("Enter the height");
        var area = base * height;
        console.log(`Area is : ${area}`);
        break;
    case "trapezium":
        var a = prompt("Enter the first side");
        var b = prompt("Enter the second side");
        var height = prompt("Enter the height");
        var area = 0.5 * (a + b) * height;
        console.log(`Area is : ${area}`);
        break;
    case "ellipse":
        var a = prompt("Enter the first radius");
        var b = prompt("Enter the second radius");
        var area = Math.PI * a * b;
        console.log(`Area is : ${area}`);
        break;
    default:
        console.log("Invalid shape");
}

