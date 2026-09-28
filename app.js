// var students = [
//     {
//         name: "Muhammad",
//         age: 24,
//         class: "12th",
//         marks: [90, 78, 44, 56, 90],
//         //id:123
//     },
//     {
//         name: "Bilal",
//         age: 20,
//         class: "11th",
//         marks: [60, 70, 70, 80, 80],

//     }

// ];

// console.log(students);
// var users = [   //array of objects
//     {
//     username: 'person 2',
//     email: 'person2@abc.com',
//     age: 22,
//     contacts: ['03111111', '03222222'],
    
// },
//     {
//     username: 'person 2',
//     email: 'person2@abc.com',
//     age: 22,
//     contacts: ['03111111', '03222222'],
// },
//    {
//     username: 'person 2',
//     email: 'person2@abc.com',
//     age: 23,
//     contacts: ['03111111', '03222222'],
// },
// ]

// var checkProperty = "id" in students[0];

// console.log(checkProperty);
// // console.log(users[0].age);
// // console.log(users[1]);


// var st1={
//     name:'ali',
//     age: 23,
//     section: 'A',
//     marks:[50, 60, 89, 90, 80,],
//     calPer:function() {
//         var obtMarks=0;
//         for (var i=0; i<this.marks.length; i++){
//             obtMarks+=this.marks[i]
             
            
//         }
//         return ((obtMarks/500)*100)
        
        
//     }
   
// };

// var studendPer=st1.calPer()
// console.log(studendPer)
// console.log(st1)



// var student = {
//     name: "Ali",
//     marks: [50, 60, 70, 80, 90],

//     calTotal: function() {
//         var obtmarks=0;
//         for(var i=0; i<this.marks.length; i++){
//             obtmarks+=this.marks[i]

//         }

//       console.log(obtmarks)
//     }
// };
//  var students=student.calTotal()
//  console.log(student)




// var student = {
//     name: "Ali",
//     marks: [50, 60, 70, 80, 90],

//     calAverage: function() {
//         var total=0;
//    for(var i =0; i<this.marks.length; i++){
//        total=total+this.marks[i]

//    }
//     return (total/this.marks.length)
//     },
  




// }


// var students=student.calAverage()
//  console.log(students)


//  var student = {
//     name: "Ali",
//     marks: [50, 60, 70, 80, 90],

//     highestMarks: function() {
//         var highest = this.marks[0];

//         for (var i = 1; i < this.marks.length; i++) {
//             if (this.marks[i]  highest) {
//                 highest = this.marks[i];
//             }
//         }

//         return highest;
//     }
// };

// console.log(student.highestMarks());


var arr=[60, 60, 70, 60, 50, 45,];
var total=0;
for (var i=0; i<arr.length; i++){
    total+=arr[i]
    var x=total/500*100
}
console.log(x);
// console.log(arr[5]); 
// this whole function is correct and it just called in 
//  seprate function like without storing and puting it in console idf we wanna have thi result in
//  console we have to call function inside console
// var arry=[80, 60, 50, 90, 80,];
// function calPercentage() {
//     var myTotal=0;
//     for(var i=0; i<arry.length; i++){   /// 
//         myTotal=myTotal+arry[i]
//     }
//     return (myTotal/500) * 100
//     // console.log(myTotal);
    
// }
// calPercentage()

//    document.write(calPercentage() + "%");

// var arry = [80, 60, 50, 90, 80];

// function calPercentage() {

//     var myTotal = 0;

//     for (var i = 0; i < arry.length; i++) {

//         myTotal = myTotal + arry[i];

//     }

//     return (myTotal / 500) * 100;
// }

// console.log(calPercentage());


// var marks = [70, 85, 60, 90, 75];
// function calAverage(){
//     var urTotal=0;
//     for(var i=0; i<marks.length; i++){
//     urTotal+=marks[i]
// }
//       return urTotal/marks.length
// }
// var x=calAverage()
// console.log(x)



// var numbers = [20, 45, 12, 89, 34, 67];
// function findHighest(){
//     var highest=numbers[0];
//     for(var i=0; i<numbers.length; i++){
//         if(numbers[i]< highest){
//             highest=numbers[i]
//         }
     
//     }

//     return highest
// }

// var highestNumber=findHighest()
// console.log(highestNumber);

// var countingMarks=[45, 80, 32, 67, 90, 25, 55];
// function counPassings() {
//     var count=0;
//     for(var i=0; i<countingMarks.length; i++){
//         if (countingMarks[i] >=50){
//             count++
//         }
//     }
//     return count
    
// }

// var pass=counPassings()
// console.log(pass)

var obj={
 
    name: 'muhammad',
    class: '12th',
    section:'A',
    marks:[60, 90 ,70 ,50, 80, 40, 30,],
    calPer: function takeTotal() {
   var total=0;
   for(var i=0; i<this.marks.length; i++){
     total+=this.marks[i]

     if(this.marks[i] <  60){
        console.log('fail')
     }
   }

//    console.log(total);
return(total/500) *100
// return (total/5)

}
}
delete obj.class
console.log(obj);

var totaly = obj.calPer();
console.log(totaly);



var array=['ali', 'bilal', 'ahmed', 'umar', 'hamza', 'hassan']
var  index=3
array.splice(0, 1, 'muhammad saleem'),
console.log(`An index of ${index} returns ${array.at(index)}`);


console.log(`An index of ${index} returns ${array.at(index)}`);
// Expected output: "An index of -2 returns 130"





 //printing fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for(var i =0; i<fruits.length;i++){
console.log(fruits[i])
}

///gerting total numbers
let numbers = [10, 20, 30, 40, 50];
var total=0;
for (var i=0; i<numbers.length; i++){
  total=total+numbers[i]
}console.log(total)




 //checking smalest number
let number= [12, 7, 18, 25, 30, 41, 50];
var higestnumebr=number[0]
for(var i=0; i<number.length; i++){
  if (number[i >higestnumebr]){
    number[i]=higestnumebr
  }
}
console.log(higestnumebr)



 //checking smalest number
let mynumber = [20, -5, 12, -30, 90, 8];
var myhigh=mynumber[0];
for(var i =0; i<mynumber.length ; i++){
  if(mynumber[i]< myhigh){
    mynumber[i]=myhigh
  }
}
console.log(myhigh)




//printing just marks

let students = [
    { name: "Saleem", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Noor", marks: 72 },
    { name: "Ali", marks: 38 },
    { name: "Saad", marks: 90 }
];


for(var i=0; i<students.length; i++){
  //students[i].marks
  console.log(students[i].marks)
}




//geting even numbers
var urnumbers=[13, 45, 70, 90, 67,44, 22,];
for(var i=0; i<urnumbers.length; i++){
//   if(urnumbers[i]% 2==0){
//     console.log("even number")
//   }
// }

// GETING OD NUMBERS
if(urnumbers[i]%2== 1){
  console.log("odd number")
}
}



//printing odd numbers
// let thisNumbers = [13, 45, 70, 90, 67, 44, 22, 31, 55];
// for (let i = 0; i < thisNumbers.length; i++) {
//      if(thisNumbers[i] %2==1){
//       console.log(thisNumbers[i])
//      }
  
// }


//totaling just even numbers 
// let totalFindNumbers = [10, 15, 20, 7, 8, 12, 25, 30];

// let theTotal = 0;


// for (let i = 0; i < totalFindNumbers.length; i++) {

//     if (totalFindNumbers[i] % 2 == 0) {
//         theTotal = theTotal + totalFindNumbers[i];
//     }
// }

// console.log(theTotal);


// let myArray=[12, 13, 45, 67, 78,];
//  let thisTotal=0;
// for(var i =0; i<myArray.length; i++){
//     thisTotal+=myArray[i]
//     console.log(thisTotal)

// }

// function Student(name, age, marks) {
//    this.name=name;
//    this.age=age;
//    this.marks=marks;
  
// }
// Student.prototype.calPercentage= function (){
//   let myobt=0;
//   for (var i=0; i<this.marks.length; i++){
//     myobt+=this.marks[i]
//   }
//  return((myobt/500)*100)
// }
// let sdt1=new Student('muhammad saleem', 24, [56, 70, 90, 80, 60, 90,])
// let sdt2=new Student('muhammad saleem', 24, [60, 50, 80, 70, 80, 80,])
// console.log(sdt1.calPercentage());
// console.log(sdt2.calPercentage());



let mydata=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
];


for (var i in mydata) {
    // console.log(mydata[i]);

    for (var key in mydata[i]) {
        // console.log(key);

        if (typeof mydata[i][key] == 'object') {

            for (var key2 in mydata[i][key]) {

                if (key2 == 'geo') {
                    console.log(`lat : ${mydata[i][key][key2].lat}`);
                    console.log(`long : ${mydata[i][key][key2].lng}`);
                } 
                else {
                    console.log(`${key2} : ${mydata[i][key][key2]}`);
                }
            }

        } else {
            console.log(`${key} ${mydata[i][key]}`);
        }
    }

    console.log('--------------------------');
}