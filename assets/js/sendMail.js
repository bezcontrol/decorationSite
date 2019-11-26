document.getElementById("senderMail").addEventListener("click", sendEmail, false);

function sendEmail(){

	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let email = document.getElementById('mail').value;

	(function(){
		emailjs.init("user_uA3tJqibLCPfQlnTJGdGD"); //Insert your user ID 
	})();

	var templateParams = {
		name: 'email',
		notes: firstName + " " + lastName + 'want to make an order!'
	};

	emailjs.send('gmail', 'template_4LeO82KY', templateParams) //Insert your email service ID and email template ID
	.then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
	}, function(error) {
		console.log('FAILED...', error);
	});
}