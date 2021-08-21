import { send } from 'emailjs-com';

//postMessage
export const postFeedback = (email, message) => {//post feedBack on the server

    const toSend = {
        from_name: 'example@example.com',
        to_name: ' UserName',
        message: message + ' from ' + email + '.',
        reply_to: email,

    };
    toSend.date = new Date().toISOString();

    return send(
        'service_ID', //SENSIBLE DATA
        'template_ID', //SENSIBLE DATA
        toSend,
        'user_ID' //SENSIBLE DATA
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
};

