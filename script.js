let data = [
   {firstname},
   {lastname},
   {email},
   {country},
   {telephone},
   {mensaje},
 ];

let currentIdNumber = data.length;

  const formElem = document.getElementsByTagName("form")[0];
  formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  });
    function addListeners(){
    const addPrintButtonsElement =
    document.getElementsByClassName ("submit-btn")[0];
    addPrintButtonsElement.addEventListener ("click", addRegHandler);    
}

function addRegHandler (){
    const firstnameElem = document.getElementById("firstname");
    const lastnameElem = document.getElementById("lastname");
    const emailElem = document.getElementById("email");
    const countryElem = document.getElementById("country");
    const telephoneElem = document.getElementById("telephone");
    const mensajeElem = document.getElementById("mensaje");
   
    const id = currentIdNumber++;
    const firstname = firstnameElem.value;
    const lastname =lastnameElem.value; 
    const email =emailElem.value; 
    const country =countryElem.value; 
    const telephone =telephoneElem.value;
    const mensaje =mensajeElem.value;  

  const newReg = {id,firstname, lastname, email, country, telephone, mensaje};
  
    if (firstname && lastname && email && country && telephone && mensaje){
       addFormAlert(newReg);
    }
}

  function addFormAlert(data){
    console.log ("data:", data);
    const {id,firstname, lastname, email, country, telephone, mensaje} = data;
    window.alert (`firstname:${firstname}, lastname:${lastname}, email:${email}, country:${country}, telephone:${telephone}, mensaje:${mensaje}`);
}

  addListeners();   