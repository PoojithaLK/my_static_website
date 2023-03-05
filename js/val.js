function CheckEmail()

{

var input=document.forms["form1"]["email"].value;

var email=/^\w+([\.-]?\w+)*@\w*(\.\w{2,3})$/;
if(input.match(email))

{

	alert("Details saved")

}
else
{
	alert("email should be in the given format: emailid@abc.com")
}
 }
