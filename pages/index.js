//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//1
import { useState } from 'react'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (
    <div>
      <form>
       
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e)=>{setName(e.target.value)}} name='name'  />
        
          <label htmlFor='email'>Email</label>
          <input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email'  />
                
          <label htmlFor='message'>Message</label>
          <input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message'  />

        <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </form >
    </div>
  )
}

