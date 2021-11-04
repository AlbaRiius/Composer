export default function (e = 'sergiturbadenas@gmail.com') {
    let email = e;
    var password = 'asdasdasdas';

    return {
        email: email,
        consoleme: function consoleme() {
            console.log('Usuari: ' + email)
        }
    }
}