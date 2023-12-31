// Non PRimitive Data Type - Objects in JS
const item ={ //item vaneko object ho
    name : "Anup Tachamo", // name is key and "Anup Tachamo is a value"
    address : "jagati",
    contact_no : 9876789878,
    Remark : function () { //object vitra function ni banauna milxa
        // let fullname = "Rati madhikarmi"
        // return this.fullname   //yo this.fullname le remark ko function ma vako variable laii define gareko xa
        return "I'm a good learner --" + this.name //this.name le mathii item vitra vayeko key(name) laii define gareko xa
    },
    other(){ //object vitra multiple function nii banauna milxa (other is a key and value both in function case)
        return this.Remark  //function vitra arko function laii call gareko 
    },

    //object vitra arko object banako
    myLocation : {
        city : {
         eg :   "Bhaktapur"
        },
        street : "Golmadhi"
    },
}
console.log(item.contact_no) //item object ko contact_no ko value show hunxa
console.log(item.Remark())
console.log(item.other())
console.log(item[typeof item])

console.log(item.myLocation.city)




// *javaScript ma euta object vanne naii Object xa, jas bata hamle object ko key value check garna sakinxa
//for example
console.log(Object.keys(item)) //object ko key matra check garxa
console.log(Object.values(item)) //object ko value matra check garxa
console.log(Object.entries(item)) //object ko key and value dubaii check garxa

//*how to copy object value 

//yo case ma name vanne key mathii item ko object maii vako le name ma keii change hundaina tara testname item ko key ma define nagareko le copyed vanne object ma add hunxa
let copyed = { name: "test", testname: "testtest"}  

Object.assign(copyed, item) //item ma vako value haru sabaii copyed vanne object ma copy hunxa
console.log(copyed)



//Modify
console.log(item)
item.name = "Tachamo anup"
console.log(item)




// Adding new value
item.age = 22
item.class = function (){
    return "Bachelor"
}
console.log(item)


//Read
delete item.Remark  //remark ko key and value delete hunxa
console.log(item)



//const use garda nii object value change garna nadina lai garxa (testko lagii "use strict" panii use garnai parxa) for example:-
"use strict"
const book = Object.freeze({ // Object.freeze le naya value assign garna dindaina tara "use strict" chae use garnaii parxa
    name : "Learner",
    author : "something"
})

book.name = "change it" //aba name ko value change garna khojda change hundaina
console.log(book)
console.log(Object.isFrozen(book)) //checking object is freeze or not
