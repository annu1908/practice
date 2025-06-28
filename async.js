//Task1 28June 2025 
/*function table(num){
    let i=1;
    const interval=setInterval(()=>{
        console.log(num*i);
        i++;
        if(i>10){
            clearInterval(interval);
        }
    },1000);
}
table(2);*/
//callback 
function greet(name,callback)
{
    console.log("hello",name);
    callback();
}
function saybye(){
    console.log("good bye");
}
greet("annu",saybye);
//Practice
//pronlem:1
function doHomework(subject,cb){
    console.log("starting my homework from today",subject);
    cb();
}
doHomework("math",()=>{
    console.log("homework done ");
});
/*output:starting my homework from today math
homework done*/


//problem:2
function boilWater(cb){
    setTimeout(()=>{
        console.log("Boiling Water")
        cb();
    },2000)
}
function noodles(cb){
    setTimeout(()=>{
        console.log("Adding noodles")
        cb();
    },1000)
}
function serving(cb){
    setTimeout(()=>{
        console.log("Serving noodles")
        cb();
    },1000)
}
boilWater(()=>{
noodles(()=>{
    serving(()=>{
        console.log("Done")
    })
})
});
/*output: Boiling Water
Adding noodles
Serving noodles
Done*/

//Promises
//1(resolves immediately)
const myPromise=new Promise((resolve,reject)=>{
    resolve("i am learning promise")
}).then((msg)=>{
    console.log(msg);
})
//Output:i am learning promise

//2(condition)
function checkPositive(num){
    return new Promise((resolve,reject)=>{
        if (num>0)
            resolve("Positive Number")
            else (num<=0)
                reject("Not a positive Number")
            
    })
}
checkPositive(24).then((msg)=>{
    console.log(msg)
});
//output:Positive Number

//Fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>
    response.json())
.then((data)=>{
    console.log("Data:",data)
}
)
.catch((err)=>{
    console.log("Error",err)

})
/*Output:
Data: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}*/

