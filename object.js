//object 
const student={
    name:"Annu",
    Surname:"Sandhu",
    age:23

};
console.log(student);
console.log(student.name);
/*output: { name: 'Annu', Surname: 'Sandhu', age: 23 }
Annu*/

//assign
const product={name:"keychain" ,price:"150"};
const details={category:"resin",inStock:true};
const fullDetails=Object.assign({},product,details);
console.log(fullDetails);
//{ name: 'keychain', price: '150', category: 'resin', inStock: true }

//defineProperty
const item={name:"Hoop"};
Object.defineProperty(item,"id",{
    value:10,
    writable:false,
    enumerable:true,
    configurable:false
});
console.log(item.id); //output:10

//object.entries
const user={
    name:"Annu",
    role:'Admin'
};
const entries=Object.entries(user);
console.log(entries);
entries.forEach(([key,value])=>{
    console.log(`${key}->${value}`);
});
/* Output:
[ [ 'name', 'Annu' ], [ 'role', 'Admin' ] ]
name->Annu
role->Admin */

//object.seal
const order={
    item:"sketch",
    price:300
};
Object.seal(order);
order.price=350;
order.status="done";
delete order.item;
console.log(order);
//output: { item: 'sketch', price: 350 }

//Object.freeze(obj)

const admin={
    name:"Annu",
    role:"admin user"
};
Object.freeze(admin);
admin.age=23;
admin.name="Shivi";
console.log(admin);
//output:{ name: 'Annu', role: 'admin user' }


//Parsing
parseInt();
console.log(parseInt("42"));
console.log(parseInt("abc"));
console.log(parseInt("42.85"));
/* output:42
NaN
42 */
parseFloat();
console.log(parseFloat("12"));
console.log(parseFloat("abc"));
console.log(parseFloat("12.85"));
/* output: 12
NaN
12.85 */

//finite and infinite
console.log(isFinite("12"));
console.log(1/0);

//math
const price=999.75;
//round
const roundedPrice=Math.round(price);
console.log(roundedPrice);
const floorPrice=Math.floor(price);
console.log(floorPrice);
const ceilPrice=Math.ceil(price);
console.log(ceilPrice);
/* output:
1000
999
1000 */
const values=[499,600,789,987];
const maxValue=Math.max(...values);
console.log(maxValue);
const minValue=Math.min(...values);
console.log(minValue);
//output:987 499
const number=Math.random();
console.log(number);
//output:0.45300026582323105
const logValue= Math.log(10);
console.log(logValue);
//Output:2.302585092994046
const power=Math.pow(3,4);
console.log(power);
//output:81

