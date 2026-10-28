let form = document.forms.feedback;

function sendFeedback(event) {
    event.preventDefault();

    let email = form.elements.email.value;
    let name = form.elements.name.value;
    let comment = form.elements.comment.value;

    let result = document.createElement('div');
    let message = document.createElement('p');
    message.textContent = 'Feedback has been sent';
    result.append(message);

    let emailInfo = document.createElement('div');
    emailInfo.textContent = 'Email: ' + email;
    result.append(emailInfo);

    let nameInfo = document.createElement('div');
    nameInfo.textContent = 'Name: ' + name;
    result.append(nameInfo);

    let commentInfo = document.createElement('div');
    commentInfo.textContent = 'Comment: ' + comment;
    result.append(commentInfo);

    form.replaceWith(result);
}

form.addEventListener('submit', sendFeedback);
