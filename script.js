function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value 
    }

    emailjs.send("service_vhoxjo4", "template_250qi7q",parms).then(alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`));
}
