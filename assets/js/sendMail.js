document.getElementById("senderMail").addEventListener("click", sendEmail, false);

function sendEmail(){

    let meilToSend = '*****'; // corporate mail should be here
    let password = '****'; // corporate mail password should be here

    let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let email = document.getElementById('mail');
    
    let host = 'smtp.gmail.com';
    let emptyString = '';
    let space = ' ';
    let Ok = 'OK';
    let subject = 'Alone at home order';
    let bodySentence = ' Want to make order ';

    Email.send({
    	Host : host,
    	Username : meilToSend,
    	Password : password,
    	To : meilToSend,
    	From : email.value,
    	Subject : subject,
    	Body : firstName.value + space + lastName.value + bodySentence + email.value
    }).then(
    message =>
    console.log(message));

    email.value = emptyString;
    firstName.value = emptyString;
    lastName.value = emptyString;
}