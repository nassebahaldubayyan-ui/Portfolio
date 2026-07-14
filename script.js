function showToast(message, success = true){

    const toast = document.getElementById("toast");
    const icon = document.getElementById("toast-icon");
    const text = document.getElementById("toast-message");

    text.textContent = message;

    if(success){

        toast.classList.remove("error");
        toast.classList.add("success");

        icon.textContent = "✔";

    }
    else{

        toast.classList.remove("success");
        toast.classList.add("error");

        icon.textContent = "✖";

    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}
emailjs.init("uUf29rmA5_dLe0YS_");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_yzpisej",
        "template_mghxxbu",
        this
    )

    .then(function(){

        showToast("Message sent successfully!");

        form.reset();

    })

    .catch(function(error){

        showToast("Failed to send message.");

        console.log(error);

    });

});