//array destructing 

var myArray = [10,20,30,40]
//var[a,b,c,d] = myArray
//var[,,a]=myArray
//console.log(a) //output 10   30

var[x,y,,z] = myArray;
//console.log(x,z) //output 10 40

//-------------

//object destructing

var myObj = {
    myName : "sheetal",
    age :30,
    city : "Dhaka",
    country : "Bangladesh"
}

var{city,myName} = myObj
//console.log(myName,city)// output sheetal Dhaka

//-----------

//SPREAD SYNTAX of Array

var array1 = [10,20,30,40,50]
var array2= [1,2,3,4,5,6]
var array3 = [...array1,...array2]
// console.log(array3)  //output [
                        //     10, 20, 30, 40, 50,
                        //      1,  2,  3,  4,  5,
                        //      6
                        //   ]
 var array4 = [...array1,array2];
 //console.log(array4)    //output [ 10, 20, 30, 40, 50, [ 1, 2, 3, 4, 5, 6 ] ]

 var array5 = [2000,3000,...array1,4000,5000,...array2,6000,70000]
 //console.log(array5)

 //output [
            //    2000, 3000, 10,   20,
            //    30,   40, 50, 4000,
            //  5000,    1,  2,    3,
            //     4,    5,  6, 6000,
            // 70000
            // ]

//---------


//functiom
function sum(a,b,c,d){
    
    return a+b+c+d;
}

var numberArray = [1,2,3,4]
//console.log(sum(...numberArray))
//-----------------------------


//copy array using spread and push method

var array1 = [1,2,3]
var array2 = array1
//console.log(array2) //output [ 1, 2, 3 ]
array2.push(4)
//console.log(array2) // output [ 1, 2, 3, 4 ]
//console.log(array1)// output [ 1, 2, 3, 4 ]

var array3 = [1,2,3]
var array4 = [...array3]
//console.log(array3)
array4.push(4)
//console.log(array4) //output [ 1, 2, 3, 4 ]
//console.log(array3) // output [ 1, 2, 3 ]

var array5 = [1,2,3]
var array6 = []
for(var items of array5){
    //console.log(items)
    array6.push(items)
   
}
//console.log(array6) //output [ 1, 2, 3 ]
var result = array6.push(4)
//console.log(result) //output 4

//console.log(array5,array6) //output  [ 1, 2, 3 ] [ 1, 2, 3, 4 ]


//---------------------------------

//combining two objects
var obj1 = {
    name1 :"wahed",
    age1 : 21
}

var obj2 ={
    name2 : "imtiaz",
    age2 :30
}

var combinedObj = {
    ...obj1,
    ...obj2
}

//console.log(combinedObj) //{ name1: 'wahed', age1: 21, name2: 'imtiaz', age2: 30 }


//---------------------------


//clone an obj

var obj3 = {
    fName : "A",
    lName : "B"
}

var obj4 = {
    ...obj3
}

//console.log(obj3,obj4) //{ fName: 'A', lName: 'B' } { fName: 'A', lName: 'B' }


//Reduce method 

function sum(...numbers){
    return numbers; //return numbers as array
}

//console.log(sum(1,2,3,4,5,6,7,8,9)) //output
                                        // [
                                        //     1, 2, 3, 4, 5,
                                        //     6, 7, 8, 9
                                        //   ]
  
  
//console.log(1,2,3,[4,5,6])  //output 1 2 3 [ 4, 5, 6 ]    

function add(...numbers){
    return numbers.reduce(
        (previousValue,currentValue)=>previousValue+currentValue,0
        ) //initial value - 0
    }


//console.log(add(2,4,6,8,10)); //output 30


//--------------------------------------

//Assign object

var obj = {
    fName : "sheetal",
    age :27
}

var newObj = Object.assign({},obj)

//console.log(newObj) // output { fName: 'sheetal', age: 27 }

var obj1 = {
    a:1,
    b:2
}

var obj2={
    b:3,
    c:4
}

var newObj1 = Object.assign(obj2,obj1) 
//console.log(newObj1) //output { b: 2, c: 4, a: 1 }

var newObj2 = {...obj2,...obj1}
//console.log(newObj2) //output { b: 2, c: 4, a: 1 }

//--------------------------------

//arrow function 

var result = (a,b)=>{
    return a+b;
}

//console.log(result(2,5)) //output 7

var result1= (a,b) => a+b;
//console.log(result1(2,3)) //output 5


var result3 = (a,b)=>{
    var x = a+2;
    var y = b+5;
    return x+y;
}

console.log(result3(2,3))
