const submit = document.querySelector("#submit");
console.log(submit);

submit.addEventListener('click', function(e) {
    e.preventDefault();

    const nom = document.querySelector("#nom").value;
    console.log("nom = ", nom);

    const email = document.querySelector("#email").value;
    console.log("email = ", email);

    const sujet = document.querySelector("#sujet").value;
    console.log("sujet = ", sujet);

    const message = document.querySelector("#message").value;
    console.log("message = ", message);
    var messageAffichee = "- Nom : " + nom + "\n" + "- Email : " + email + "\n" + "- Sujet : " + sujet + "\n" + "- Message : " + message;
    
    alert(messageAffichee);
});