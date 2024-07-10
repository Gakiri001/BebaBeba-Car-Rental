import React from 'react'
import ContactAdmin from './ContactAdmin'
import SignUpAdmin from './SignUpAdmin'
import ReservationAdmin from './ReservationAdmin'
import Addcar from './Addcar'
import "./Admin.css"

function Admin() {
  return (
    <section>
    <div>
    <h1>ADMIN PAGE</h1>
    <a href="/Addcar">View Cars</a>
    <a href="/SignUpAdmin">Users Accounts</a>
    <a href="/ReservationAdmin">Reservation Details</a>
    <a href="/ContactAdmin">Feedback from the Clients</a>
    </div>
        {/* <ContactAdmin />
        <SignUpAdmin />
        <ReservationAdmin /> */}
    </section>

  )
}

export default Admin