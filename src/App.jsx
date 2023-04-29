import { useState } from 'react'
import './app.css'
import FormInput from './components/FormInput'

const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    subject: '',

    message: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'subject',
      type: 'text',
      placeholder: 'Subject',
      label: 'Subject',
    },
    // {
    //   id: 4,
    //   name: 'password',
    //   type: 'password',
    //   placeholder: 'Password',
    //   errorMessage:
    //     'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    //   label: 'Password',
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //   required: true,
    // },
    {
      id: 4,
      name: 'message',
      type: 'text',
      placeholder: 'Your message here',
      errorMessage: "Passwords don't match!",
      label: 'Messages',

      required: true,
    },
  ]
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    // e.preventDefault()
    // setIsSubmitted(true)
    // alert('Form submitted successfully!')

    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())

    fetch(
      'https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formObject),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitted(true)
        alert('Form submitted successfully!')
      })
      .catch((error) => {
        alert('Form submission failed!')
      })
    const isFormSubmittedSuccessfully = true // replace with your form submission logic
    if (isFormSubmittedSuccessfully) {
      setIsSubmitted(true)
      alert('Form submitted successfully!')
    } else {
      alert('Form submission failed!')
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
