// document.addEventListener("DOMContentLoaded", function (event) {

//     document.getElementById("button1").addEventListener("click", function () {

//         document.getElementById("textbox1").value = "success";
//         document.getElementById("msg").innerHTML = "Sorry, invalid input date";

//     });
// });

document.getElementById("button1").addEventListener("click", function () {
    output();
    reset();
});

let total = 0;
output = function() {
    let myList = document.getElementById("myList");
    let msg = document.getElementById("msg");
    let name = document.getElementById("name").value;
    let calories = document.getElementById("calories").value;
    let quantity = document.getElementById("quantity").value;
    
    let alert = quantity+" " +name + " " + calories +" calories" ;
    

    function createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li;

    }

    caloriesTotal = function(){
        let cal = calories*quantity;
        total+=cal;
        return ("Total Calories for today: "+ total +" kcal");
    }

    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) } //this function checks if n is a number

    validation = function(){
        if(name==="" || calories ==="" || quantity === "" ||!isNumber(calories) || !isNumber(quantity) ){
        
            msg.innerHTML = "Sorry, Invalid Input!";  

        }
        else {
            myList.appendChild(createListItem(alert));
            msg.innerHTML = caloriesTotal();
            console.log(alert);
        }
    }

    validation();
}

reset = function(){
    document.getElementById("name").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("quantity").value= "";


}

class FoodItem{
        constructor (name,calories,quantity) {
            this.name=name;
            this.calories=calories;
            this.quantity=quantity;
            validatation();
            this.update();
        }

        static update(){
            console.log( this.quantity+" " +this.name + " " + this.calories +" calories" );
        }

        total(){
            console.log("Total Calories of "+this.name+": "+this.calories* this.quantity)
        }

        

}






