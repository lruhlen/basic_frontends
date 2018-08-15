$(document).ready(function() {

	$("form#myForm").on('submit', function(e){
		e.preventDefault();

		var uploadFile = document.getElementById("myForm").myFile.files[0];		
		var reader = new FileReader();
		var formData = new FormData();

		var xhr = new XMLHttpRequest();
		xhr.open('POST', "http://localhost:8000/example_post_request", true);
		xhr.setRequestHeader('Content-Type', 'text/plain');
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		

		xhr.onload = function () {
  		if (xhr.status === 200) {
		    // File(s) uploaded.
		    foo.innerHTML = 'Uploaded!';
		} else {
		    alert('An error occurred!');
			}
	   	};
		
	   	reader.onload = function(e) {
	   		xhr.send(e.target.result);
	   	};

		// Start reading the blob as text.
		reader.readAsText(uploadFile);

		

	});

});

