import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='row'>
            <div className="col-6">
            <h1 className='text-center mt-5'>Sync.Me Contacts List</h1>
        <div className="container m-3">
        <p style={{ textAlign: 'justify' }}>These days, Sync.Me puts more of an emphasis on caller ID and spam blocking features,
          but there's still enough contact management functionality in here to make it a worthwhile download if you're on
          the hunt for one of the best contact apps. One of the app's best contact features is its ability to add full screen
          photos to your contacts. That way you can more easily see who's calling you. The app also lets you merge and backup
          contacts, and background contact sync keeps images tied to your contacts' profile pictures from social media. Those last
          three features are part of a premium subscription that costs $9.99 per year, with other monthly pricing options available.
          However, there's a free trial of the Pro features for 30 days.</p>
        </div>

        <div className='d-flex justify-content-end'>
            <Link to={'/contacts'}>
            <button className='btn btn-primary px-5'>Get Started</button>
            </Link>
            
        </div>
            </div>
            <div className="col-6">
                <img height={"550px"} src="https://i.pinimg.com/originals/95/54/55/95545586b437892bff2dd2174e8e088e.gif" alt="" />
            </div>
       
        </div>
    </div>
  )
}

export default Home