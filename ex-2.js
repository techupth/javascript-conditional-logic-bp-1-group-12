//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
let lightBulbCheck = (lightBulb)=>{
    if(lightBulb == "On"){
        console.log("Light bulb is On.")
    }else if (lightBulb == "Broken"){
        console.log("Light bulb is Broken.")
    }else if (lightBulb == "Off"){
        console.log("Light bulb is Off.")
    }else console.log("Please choose the correct input (On/Off/Broken)")
}
lightBulbStatus = "Broken"