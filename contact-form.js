document.querySelector('.send-btn').addEventListener('click', function() {
    const name = document.querySelector('.input-name');
    const email = document.querySelector('.input-email');
    const message = document.querySelector('.input-message');

    let isValid = true;

    if(name.value.trim() === '') {
        name.style.boxShadow = '0 0 3px red inset';
        isValid = false;
    }
    else {
        name.style.boxShadow = '0 0 3px #575555 inset';
    }

    if(email.value.trim() === '') {
        email.style.boxShadow = '0 0 3px red inset';
        isValid = false;
    }
    else {
        email.style.boxShadow = '0 0 3px #575555 inset';
    }
    if(!isValidEmail(email.value.trim())) {
        email.style.boxShadow = '0 0 3px red inset';
        isValid = false;
    }
    else {
        email.style.boxShadow = '0 0 3px #575555 inset';
    }

    if(message.value.trim() === '') {
        message.style.boxShadow = '0 0 3px red inset';
        isValid = false;
    }
    else {
        message.style.boxShadow = '0 0 3px #575555 inset';
    }
    if(isValid) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "sigmundfiller02@gmail.com",
            Password: "FC03E4E831A63D3F9450FE302E92B5465B87",
            To: 'benj.rollan.02@gmail.com',
            From: "sigmundfiller02@gmail.com",
            Subject: "Portfolio Contact Form Message From : " + name.value,
            Body: `
                <strong>Full Name : </strong> ${name.value}<br><br>
                <strong>E-mail : </strong> ${email.value}<br><br>
                <strong>Message : </strong> ${message.value} <br><br>
            `,
        })
        .then(function() {
            alert("Message sent successfully!");
        })
        .catch(function() {
            alert("An error occurred while sending the message.");
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}