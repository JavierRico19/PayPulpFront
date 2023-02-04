

const useForm = (formData, setFormData, setError) => {

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }) 
  }

  const validate =  (event) => {
    console.log(event.target)
    // const validation = validationFunction()
    setError("validation")
  }
  
  const formProps = {
    onChange: handleChange,
    onBlur: validate,
  }

  return formProps;
}

export default useForm;