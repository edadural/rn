import axios from 'axios';

const API_KEY = 'AIzaSyB3aBis6FtJTwYoXom7fsm_WZgL6taB6Yw';

async function authenticate(mode, email, password) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );

    console.log(response.data);
}

export async function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export async function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}
