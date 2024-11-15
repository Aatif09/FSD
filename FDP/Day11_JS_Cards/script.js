function handleName(e) {
    let val = e.target.value;
    const parent = document.getElementById("card-name");
    parent.innerText = `Name:${val}`;
}

function handleCode(e) {
    let val = e.target.value;
    const parent = document.getElementById("card-code");
    parent.innerText = `Name:${val}`;
}

function handlefile(e) {
    console.log(e);
    const file = e.target.files[0];
    const val = URL.createObjectURL(file);
    const fileimg = document.getElementById("file");
    fileimg.setAttribute("src", val);
}
function validateEmail(e) {
    const val = e.target.value;
    const res = val.split("@");
    if (res[1] == "abes.org") {
        document.body.style.backgroundColor = "green";


        
    }
    else {
        document.body.style.backgroundColor = "red";
    }
}
function validateRoll(e) {
    const val = e.target.value;
    if (val > 24000 && val < 25000) {
        alert("Valid")
    }
    else {
        alert("In-----Valid")
    }
}
function handleForm(e) {
    console.log(e);
    e.preventDefault();
    console.log(e);
    const email = e.target[0].value;
    const rollNumber = e.target[1].value;
    const res = email.split("@");
    if (res[1] == "abes.org") {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
    }

    if (rollNumber > 24000 && rollNumber < 25000) {
        alert("Valid")
    }
    else {
        alert("In-----Valid")
    }
}