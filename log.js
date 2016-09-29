$('#account').click(create);

//make an account
function create() {
	var email = $('#email').val();
  var passwd = $('#pwd').val();
	var checkEmail = $('#checkEmail').val();
	var checkPwd = $('#checkPwd').val();
	
	if (email != checkEmail){
		$('#print').css("display","block");
		$('#print').text("This email does not have an account!");
		$('#checkEmail').val("");
		return;
	}
	if (pwd != checkPwd){
		$('#print').css("display","block");
		$('#print').text("Sorry, that's the wrong password.");
		$('#pwd').val("");
		$('#checkPwd').val("");
		return;
	}
	
	//attempt to register user with firebase
	firebase.auth().createUserWithEmailAndPassword(email, passwd)
	.then(function() {
		//success
		$('#print').css("display","none");
		document.inForm.submit();
	}, function(error) {
		$('#print').css("display","block");
		window.alert(5 + 6);
		return;
	});
}
