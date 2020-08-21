import React from 'react'

const Contacts = (contacts) => {
  return (
    <div>
      <center><h1>Bosch Bash</h1></center>

      {/* {contacts.results.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.provider}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.source}</h6>
            <p class="card-text">{contact.license}</p>
          </div>
        </div>
      ))} */}

      <p>{contacts.title}</p>

    </div>
  )
};

export default Contacts