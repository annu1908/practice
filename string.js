//string's method
//1.(length)
let name ='annu';
console.log(name.length); //output 4
//2.(concat)
let firstName='Annu';
let Surname='Sandhu';
let fullname=firstName.concat(Surname);
console.log(fullname); //Output AnnuSandhu
//3.(split):splits the string into array
let rgb="red,blue,green";
let color=rgb.split(",");
console.log(color); //output [ 'red', 'blue', 'green' ]
//4.(index of)
let message="wlcm to  world";
console.log(message.indexOf("world"));//output 9
//5.(toUpperCase)
let happiness="art";
console.log(happiness.toUpperCase());//Output Art
//6.(replace)
let text="learning javascript";
let newText=text.replace("learning","learn");
console.log(newText);// output learn javascript
//7.(trim)
let username="   Annu   ";
console.log(username.trim()); //Output Annu
//8.(includes)
let quote="Be always happy";
console.log(quote.includes("happy")); //Output true
console.log(quote.includes("art"));// Output false
//Array concept
let fruits=[];
function addFruit(fruitName)
{
    let existingFruit=fruits.find(item=>item.name===fruitName);
    if(existingFruit)
    {
        existingFruit.count += 1;

    }else{
        fruits.push({name:fruitName,count:1});
        }
        console.log(fruits);
}
addFruit("apple");
addFruit("kiwi");
addFruit("apple");
/*  Output [ { name: 'apple', count: 1 } ]
[ { name: 'apple', count: 1 }, { name: 'kiwi', count: 1 } ]
[ { name: 'apple', count: 2 }, { name: 'kiwi', count: 1 } ]*/
addFruit.push({name:"banana" ,count:1});