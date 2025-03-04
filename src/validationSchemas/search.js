import * as yup from "yup";

const schema = yup
  .object({
    query: yup.string().required('Please enter your search query.'),
  })
  .required()


export default schema;