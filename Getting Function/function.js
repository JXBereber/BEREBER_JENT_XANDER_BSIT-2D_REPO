// var dogName = "Rover"
 // var dogWeight = 23;
 // if (dogWeight > 20){
 //     console.log(dogName + " says WOOF WOOF ")
 // }else{
 //     console.log(dogName + " says arf arf ")
 // }
 
 // dogName = "hitler";
 // dogWeight = 13;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF ARF ")
 // }
 
 // dogName = "sarge";
 // dogWeight = 15;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF ARF ")
 // }
 
 // dogName = "bogart";
 // dogWeight = 19;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF arf arf ")
 // }
 
 function bark(name, weight){
    if(weight > 20){
        console.log(name + " says WOOF WOOF ");
    } else {
        console.log(name + " says arf arf ");
    }
}

bark("rover", 23);
bark("hitler", 13);
bark("sarge", 15);
bark("bogart", 19);