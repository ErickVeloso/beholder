export function doLogin(email, password) {
    return new Promise((response, reject) => {
        if (email === "teste@123.com"
            && password === "123456") {
            response(true);
        }
        reject("User or Password invalid !");
    });
}

export function doLogout() {

}