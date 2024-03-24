import React from 'react'
import "./Contact.css"
import { TextField, Button } from '@mui/material'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'


const Contact = () => {
  return (
    <section id='contact' className='contact'>
        <div className='email-form'>
            <h1>Contact Us</h1>
            <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
            <TextField className='TextField' required id="outlined-required" label="Full Name" />
            <TextField className='TextField' required  id="outlined-basic" label="Email" variant="outlined" />
            <TextField className='TextField' id="outlined-multiline-flexible" label="Message" multiline maxRows={4} />
            <Button className='button' variant="contained">SEND</Button>
            <div className='contact-info'>
                <div className='phone'>
                    <img src={phone}/>
                    <div>
                        <h4>PHONE</h4>
                        <p>0666551122</p>
                    </div>
                </div>
                <div className='email'>
                    <img src={email}/>
                    <div>
                        <h4>EMAIL</h4>
                        <p>innovatehub@info.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='map-location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12870.920493234398!2d6.5700063!3d36.2460493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1655aaa0d63ab%3A0xa80cc72a9da3c77b!2sUniversity%20of%20Constantine%202%20-%20Abdelhamid%20Mehri!5e0!3m2!1sen!2sdz!4v1711268658252!5m2!1sen!2sdz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Contact