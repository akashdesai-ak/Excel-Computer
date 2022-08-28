function valid() {
    let nm = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (nm == "" || email == "") {
        swal("Try again!", "Fill all required fields!", "error");
        return false;
    } else {
        swal("Message Sent!", "Thank you for Contact us!", "success");
        return true;
    }
}