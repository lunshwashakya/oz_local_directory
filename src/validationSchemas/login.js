import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Phone Number/ Email Address is invalid").required('Please enter your valid number or email address.'),
    password: yup.string().min(8, 'Password must be minimum 8 and 50 characters').required('Please enter your password.'),
    confirm: yup.string().required("Please check the checkbox to continue.").oneOf(['true'], 'Please check the checkbox to continue.'),
  })
  .required()


export default schema;