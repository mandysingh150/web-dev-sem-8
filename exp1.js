function validateForm() {
  var fName = document.forms["myForm"]["fName"].value;
  var lName = document.forms["myForm"]["lName"].value;
  var rNo = document.forms["myForm"]["rNo"].value;
  var mNo = document.forms["myForm"]["mNo"].value;
  var eMail = document.forms["myForm"]["eMail"].value;
  var birthday = document.forms["myForm"]["birthday"].value;
  var branch = document.forms["myForm"]["branch"].value;
  var gender = document.forms["myForm"]["flexRadioDefault"].value;
  console.log("fname :", fName);
  console.log("lName :", lName);
  console.log("rNo :", rNo);
  console.log("mNo :", mNo);
  console.log("eMail :", eMail);
  console.log("birthday :", birthday);
  console.log("branch :", branch);
  console.log("gender :", gender);
  if (fName.length == 0) alert("First name can not be empty");
  else if (lName.length == 0) alert("Last name can not be empty");
  else if (rNo.length != 11) alert("Enter valid roll number");
  else if (mNo.length != 10) alert("Enter valid 10 digit mobile number");
  else if (eMail.search("@") == -1 && eMail.length == 0) alert("Enter valid email");
  else if (branch.length == 0) alert("Select branch");
  else if (birthday.length == 0) alert("Enter DOB");
  return false;
}
