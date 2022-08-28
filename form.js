const form = document.forms[0];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let data = new FormData(form);
    console.log(form);
    console.log(data);
});
//console.log('formulario')