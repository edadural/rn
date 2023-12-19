import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer q2EfhmchEyScJUTf7ZJlMi2oF2PFg8cHG4L9zm-TOMabqH8Sxx8mESr3gu9qKolZVjBcCWjBVSzguwQSifTgJqMjhh0Pc68SY39P9fIJ_ebE2D2xanCLUKwZkkeBZXYx'
    }
})