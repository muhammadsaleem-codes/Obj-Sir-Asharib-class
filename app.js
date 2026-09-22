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