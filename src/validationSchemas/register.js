import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email is invalid").required('Please enter your email address.'),
    pasword: yup.string().min(8, 'Password must be minimum 8 and 50 characters').required('Please enter your password.'),
    confirm_pasword: yup.string().required('Please re-enter your password for confirmation.').oneOf([yup.ref('password'), null], 'Password doesn\'t match.'),
    code:yup.string().required("Please enter your verification code."),
    confirm: yup.string().required("Please check the checkbox to continue.").oneOf(['true'], 'Please check the checkbox to continue.'),
  })
  .required()


export default schema;