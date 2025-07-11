const students=[
    {id:1, name:"Annu ", age:21, marks :85},
    {id:2, name:"Riya ", age:20, marks :92},
    {id:3, name:"Sana ", age:22, marks :78},
    {id:4, name:"Priya ", age:19, marks :60},
    {id:5, name:"Meera ", age:21, marks :45}
];
//get student name
const names=students.map(student=>student.name);
console.log(names)

//get students who scored more than 80
const marks= students.filter(student=> student.marks>80)
console.log(marks);

//get student with id 3
const Stu= students.find(student=>student.id===3)
console.log(Stu)

const test=students.some(student =>student.marks<50)
console.log(test);

const check= names.includes('priya')
console.log(check)
console.log(names.indexOf("Meera"));
console.log(students.slice(1,3));


/* PS C:\Users\DELL\Desktop\Practice\javascipt> node arraymethod.js
[ 'Annu ', 'Riya ', 'Sana ', 'Priya ', 'Meera ' ]
[
  { id: 1, name: 'Annu ', age: 21, marks: 85 },
  { id: 2, name: 'Riya ', age: 20, marks: 92 }
]
{ id: 3, name: 'Sana ', age: 22, marks: 78 }
true
false
-1
[
  { id: 2, name: 'Riya ', age: 20, marks: 92 },
  { id: 3, name: 'Sana ', age: 22, marks: 78 }
]
*/