import * as yup from "yup";

const schema = yup
  .object({
    password: yup.string().min(8, 'Password must be minimum 8 and 50 characters').required('Please enter your password.'),
    confirmPassword: yup.string().required('Please re-enter your password for confirmation.').oneOf([yup.ref('password'), null], 'Password doesn\'t match.'),
  })
  .required()


export default schema;