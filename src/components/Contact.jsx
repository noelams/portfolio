import React, { useState, useRef } from 'react'
import emailjs from "emailjs-com"


function Contact() {
  const [isPending, setIsPending] = useState(false)

  const [formdata, setFormdata] = useState({
    name : '',
    email : '',
    message : ''
  })

  const form = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formdata)

    setIsPending(true)
    emailjs.sendForm (
      'service_nw4sh4t',
       'template_hh0tkze', 
       form.current,

    )
    .then((Response) => {
      console.log('SUCCESS!', Response.status, Response.text)
      alert('Email sent successfully')
      setFormdata({name: '', email: '', message: ''})
      setIsPending(false)
    },
    (error) => {
      console.log('Failed!', error)
      alert('Failed to send Email. Please try Again')
      setIsPending(false)
    })
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormdata((prevData) =>({...prevData, [name]: value}))

  }

  return (
    <div className='contact'>
      <h1>CONTACT</h1>

      <form 
        ref={form}
        onSubmit={handleSubmit} 
        name='myForm'
      >

        <input 
          type="text" 
          name='name'
          placeholder='Name'
          value={formdata.name}
          onChange={handleChange}
          className='input'
          required 
        />
        <input 
          type="email" 
          name='email'
          placeholder='Email'
          value={formdata.email}
          onChange={handleChange}
          className='input'
          required
        />
        <textarea 
          name="message" 
          placeholder='Message'
          value={formdata.message}
          onChange={handleChange}
          required
          className='input message'
        />
        {
          isPending ?(<button type='button' disabled>Sending...</button>

          ):(
            <button type='submit'> Submit</button>
          )
        }
      </form>
    </div>
  )
}

export default Contact
