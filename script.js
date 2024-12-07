"use-strict";


const doClear = () => {
    document.PizzaForm.customer.value = "";
    document.PizzaForm.address.value = "";
    document.PizzaForm.City.value = "";
    document.PizzaForm.state.value = "";
    document.PizzaForm.zip.value = "";
    document.PizzaForm.phone.value = "";


    document.PizzaForm.sizes[0].checked = false;
    document.PizzaForm.sizes[1].checked = false;
    document.PizzaForm.sizes[2].checked = false;


    document.PizzaForm.toppings[0].checked = false;
    document.PizzaForm.toppings[1].checked = false;
    document.PizzaForm.toppings[2].checked = false;
    document.PizzaForm.toppings[3].checked = false;
    document.PizzaForm.toppings[4].checked = false;
    document.PizzaForm.toppings[5].checked = false;
}
const doSubmit = () => {
    if(validateText() == false){
        alert("Required data missing in step 1:");
        return;
    }
    if(validateRadio() == false) {
        alert("Required data missing in step 2:")
    }
    alert("Your Pizza Order Has been Submitted.")
}


const validateText = () => {
    var customer = document.PizzaForm.customer.value;
    if(customer.length == 0) {
        return false;
    }
    var address = document.PizzaForm.address.value;
         if(address.length == 0) {
    return false;}
    var city = document.PizzaForm.City.value;
if(city.length == 0) {
    return false;
}
var phone = document.PizzaForm.phone.value;
if(phone.length == 0) {
    return false;
}
}
const validateRadio = () => {
    if (document.PizzaForm.sizes[0].checked){
        return true;
    }
         
    if (document.PizzaForm.sizes[1].checked) {
        return true;
    }
    if (document.PizzaForm.sizes[2].checked) {
        return true;
    }
    return false;
}
















