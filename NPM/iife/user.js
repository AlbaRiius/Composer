//IIFE
var user =(function (e = 'arius@iesebre.com') {
    let email = e;
    var password = '**********';

    function consoleme() {
        console.log('Usuari: ' + email)
    }

    return {
        consoleme: consoleme,
        email: email,
        setEmail(com) {

        }
    }
})()