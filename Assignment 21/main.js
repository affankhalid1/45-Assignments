// Assignment 21
// In object what we learned 
// default typed object
// update property
// add new property
// define custom type property
// use any with object
// They think of something you could store in a Typescript Object.
// write a program that creates objects containing these items
// Object Syntax
// Writing object in Typescript
/*let objectName = {
   key1 : "valuue1",
   key2 : "valuue2",
   key3 : "valuue3",
   key4 : "valuue4",
   key5 : "valuue5",
   key6 : "valuue6",
}*/
// let student ={
//     age: 21,
//     rollNo: 621901,
//     marks:[36,99,87]
// }
// console.log(student.marks[2])
// let product = {
//     Name : "Laptop",
//     Price : "69,000\nAfter Discount : \n65,400",
//     Model : 5490,
//     CompanyName: "DELL",
//     Category: "Gaming",
//     Warranty: "1 Year Standard Warranty",
//     Brand: "Imported",
// }
// console.log(product.Warranty)
// type interface
// interface person
// {
//     name: string;
//     age: number;
//     class: number;
//     rollno: number;
//     academic_year: number;
// }
// let person1 : person =
// {
//     name:"Alian",
//     age: 24,
//     class: 10,
//     rollno: 738899,
//     academic_year: 2024,
// }
// Initial Object
// let person5 = {
//     age:56,
//     name:"Ali",
//     city: "London",
// }
// Updated Property
// person5.name = "Shahzain";
// person5.city = "San Fransisco";
// console.log(person5)
// any property
// let myVariable : any ;
// myVariable = 10;
// myVariable = "Ali";
// myVariable = "Shahzain";
let ObjectsContainingItems = {
    "Laptop": {
        name: "DELL Latitude",
        price: "60,000",
        Description: "This is best Laptop for coding in this price range",
        Model: "5490"
    },
    "Mouse": {
        name: "Logitech",
        price: "1000",
        Description: "Best Mouse for Daily tasks",
    },
    "Keyboard": {
        name: "Logitech",
        price: "5000",
        Descrition: "Best Keyboard for Gaming and Daily Tasks",
    },
};
console.log(ObjectsContainingItems);
console.log(ObjectsContainingItems.Mouse.price);
export {};
