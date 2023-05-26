import React, { useState } from 'react'; 
import '../App.css'; // Import CSS file for styling 
 
// Sample data for food events 
const events = [ 
  { 
    id: 1, 
    title: 'Food Festival 2023', 
    date: 'May 15-17, 2023', 
    location: 'City Park, New York', 
    time: '11am to 10pm', 
    venue: 'infornt of postoffice,City Park, New York', 
    activities: 'Food stalls, live music, cooking demos', 
    offers:'Buy one, get one free on select food items', 
    description: 'Join us for the biggest food festival of the year!', 
  }, 
  { 
    id: 2, 
    title: 'Taste of the World', 
    date: 'June 5-7, 2023', 
    location: 'Downtown Square, Chicago', 
    time: 'Start at 11am & close at 10pm', 
    venue: 'near lotus park,Downtown Square, Chicago', 
    activities: 'International food vendors, cultural performances', 
    offers:'Special discounts on select food items, coupons for local attractions', 
    description: 'Experience flavors from around the world in one place!', 
  }, 
  { 
    id:3, 
    title:'Visakha Utsav Food Festival', 
    date:' January 3-5, 2023', 
    location:'Beach Road, Visakhapatnam', 
    time:'11:00 AM to 10:00 PM', 
    venue:'RB, Visakhapatnam', 
    activities:'Food stalls, live music, traditional dance performances, beachside games', 
    offers:'Special discounts on select food items, coupons for local attractions', 
    discription:'' 
    }, 
  { 
    id:4, 
    title:'Rayalaseema Food and Dance Festival', 
    date:'February 15-17, 2023', 
    location:'Kurnool Cultural Grounds, Kurnool', 
    time:'6:00 PM to 11:00 PM', 
    venue:'Kurnool Cultural Grounds, Kurnool', 
    activities:'Food stalls serving Rayalaseema cuisine, cultural dance competitions, folk music shows.', 
    offers:'Buy one, get one free on select food items, discounted entry for dance competitions.', 
    discription:'' 
  }, 
  { 
    id:5, 
    title:'Amaravati Global Music and Dance Festival', 
    date:'March 20-22, 2023', 
    location:'Amaravati, Guntur', 
    time:'5:00 PM to 10:00 PM', 
    venue:'Amaravati, Guntur', 
    activities:'Live music performances, classical dance recitals, food stalls featuring Andhra delicacies', 
    offers:'Happy hour discounts on food and beverages, exclusive souvenir giveaways.', 
    discription:'' 
  }, 
  { 
    id:6, 
    title:'Coastal Andhra Food Festival', 
    date:'Date: July 10-12, 2023', 
    location:'RK Beach, Visakhapatnam', 
    time:'12:00 PM to 9:00 PM', 
    venue:'RK Beach, Visakhapatnam', 
    activities:'Seafood stalls, cooking demonstrations, traditional dance performances', 
    offers:'Combo meal deals, cashback offers on food purchases', 
    discription:'' 
  }, 
  { 
    id:7, 
    title:'Telugu Ruchulu Food Festival', 
    date:'November 5-7, 2023', 
    location:'Nagarjuna Nagar Grounds, Guntur', 
    time:'11:00 AM to 9:00 PM', 
    venue:'Nagarjuna Nagar Grounds, Guntur', 
    activities:'Food stalls, cooking competitions, live music, cultural shows', 
    offers:'Early bird discounts, loyalty rewards for frequent visitors', 
    discription:'' 
  } 
   
  // Add more events as needed 
]; 
 
// EventCard component 
const EventCard = ({ title, date, location, description, time, venue, activities,offers }) => { 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
 
  const handlePopupOpen = () => { 
    setIsPopupOpen(true); 
  }; 
 
  const handlePopupClose = () => { 
    setIsPopupOpen(false); 
  }; 
 
  return ( 
    <div className="event-card"> 
      <h3>{title}</h3> 
      <p>Date: {date}</p> 
      <p>Location: {location}</p> 
      <button onClick={handlePopupOpen}>View Details</button> 
 
      {isPopupOpen && ( 
        <div className="popup"> 
          <div className="popup-content"> 
            <h3>{title}</h3> 
            <p>Date: {date}</p> 
            <p>Location: {location}</p> 
            <p>Time: {time}</p> 
            <p>Venue: {venue}</p> 
            <p>Activities: {activities}</p> 
            <p>Offers:{offers}</p> 
            <p>{description}</p> 
            <button
onClick={handlePopupClose}>Close</button> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
// EventCalendar component 
const EventCalendar = () => { 
  return ( 
    <div> 
      <h2>Food Event Calendar</h2> 
      <div className="event-container"> 
        {events.map((event, index) => ( 
          <div key={event.id} className="event-card-wrapper"> 
            <EventCard 
              title={event.title} 
              date={event.date} 
              location={event.location} 
              time={event.time} 
              venue={event.venue} 
              activities={event.activities} 
              offers={event.offers} 
              description={event.description} 
            /> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
export default EventCalendar;