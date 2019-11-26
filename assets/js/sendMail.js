document.getElementById("senderMail").addEventListener("click", sendEmail, false);

function sendEmail(){

	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let email = document.getElementById('mail');
        let emptyString = "";

	(function(){
		emailjs.init("user_uA3tJqibLCPfQlnTJGdGD"); //Insert your user ID 
	})();

	var templateParams = {
		name: email.value,
		notes: firstName.value + " " + lastName.value + 'want to make an order!'
	};

	emailjs.send('gmail', 'template_4LeO82KY', templateParams) //Insert your email service ID and email template ID
	.then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
                email.value = emptyString ;
                lastName.value = emptyString;
                firstName.value = emptyString;
	}, function(error) {
		console.log('FAILED...', error);
	});
}