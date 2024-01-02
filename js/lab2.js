//Question 1

while(true)
{
    let input=prompt("Enter your age ");

    if(input == null){
            break;
    }

    let age=Number(input);

    if(age < 0)
    {
        alert("Invalid input");
        continue;
    }

    if(age>=1 && age<=10)
    {
        alert("Child");
    }
    else if(age>=11 && age<=18)
    {
        alert("Teenager");
    }
    else if(age>=19 && age<=50)
    {
        alert("Grown up");
    }
    else
    {
        alert("Old");
    }

}

//Question2

let str=prompt("Enter a String");
let count=0;
str=str.toLowerCase();
for(let i=0;i<str.length;i++)
{
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
    {
        count++;
    }

}
console.log(`Count is ${count}`);



//Question3

let input = prompt("Enter the time in 24 hour format");
let time = Number(input);

function convertTime(time) {
  if (time > 12) 
  {
    time = time - 12;

    console.log(`${time}PM`);
    document.write(`${time}PM`);
  } 
  else if (time == 12) 
  {
    console.log(`${time}PM`);
    document.write(`${time}PM`);
  } 
  else 
  {
    console.log(`${time}AM`);
    document.write(`${time}AM`);
  }
}

convertTime(time);
