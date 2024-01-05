import axios from 'axios';

const API_KEY = 'AIzaSyB3aBis6FtJTwYoXom7fsm_WZgL6taB6Yw';

export async function createUser(email, password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
}
