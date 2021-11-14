import * as yup from 'yup';

const signup = yup.object().shape({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email:yup.string().email().required(),
    password: yup.string().min(5).max(8).required(),
})

export default {
    signup
}