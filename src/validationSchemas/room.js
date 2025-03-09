import * as yup from "yup";

const schema = yup
  .object({
    author: yup.string().required('Please enter author details.'),
    description: yup.string().min(8, 'Description must be minimum 8 and 50 characters').required('Please enter your description.'),
  })
  .required()


export default schema;