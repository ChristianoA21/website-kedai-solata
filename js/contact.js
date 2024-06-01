function sendEmail() {
	Email.send({
    Host : "smtp.gmail.com",
    Username : "christianoanugerah632@gmail.com",
    Password : "Gr4c30y3*",
    To : 'kedai.solata@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subjek").value,
    Body : "And this is the body"
	}).then(
  	
  	message => alert(message)
	);
}