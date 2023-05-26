
import React from 'react'; 
import '../App.css'; 
import { useState } from 'react'; 
 
  const restaurants = [ 
    { 
      id: 1, 
      name: 'Restaurant A', 
      image_url: 'https://modernrestaurantmanagement.com/assets/media/2019/11/Unsplash_Ciqxn7FE4vE-1200x655.jpg', 
     discription: ' A popular food blog that features a wide range of recipes, from quick and easy weeknight meals to more elaborate dishes.Indulge in the rich flavors of a homemade chocolate lava cake, a decadent treat that will satisfy any sweet tooth. The moist cake exterior gives way to a warm, gooey chocolate center, creating the perfect dessert for chocolate lovers',    location:'City-A', 
      contact: { 
        phone: '123-456-7890', 
        email: 'restauranta@example.com' 
      } 
       
    }, 
    { 
      id: 2, 
      name: 'Restaurant B', 
      image_url: 'https://www.hiddencitysecrets.com.au/wp-content/uploads/2016/01/album4831_37333_burma-lane-restaurant-cbd-top-restaurants-melbourne-asian-dining-best-004-768x513.jpg', 
     discription: 'This blog features a variety of comfort food recipes, as well as entertaining tips and personal stories from the author',   
       location:'City-B', 
      contact: { 
        phone: '987-654-3210', 
        email: 'restaurantb@example.com' 
      } 
    }, 
    { 
        id:4, 
        name:'Restaurant-C', 
        image_url:'https://tse2.mm.bing.net/th?id=OIP.E2Jiwh-JpD6rivpCVCrQcgHaEo&pid=Api&P=0', 
       discriptio:'This blog specializes in simple, plant-based recipes that require 10 ingredients or less and can be made in 30 minutes or less.', 
       location:'City-C', 
        contact:{ 
          phone:'123-456-7891', 
          email:'restaurantc@example.com' 
        } 
      }, 
      { 
        id:5, 
        name:'Restaurant-D', 
        image_url:'http://cpmow.ru/upload/iblock/683/DSC_6921.jpg', 
       discriptio:'This blog features a mix of healthy and indulgent recipes, as well as photography tips and resources for other bloggers.', 
 
        location:'City-A', 
        contact:{ 
          phone:'123-456-7892', 
          email:'restaurantd@example.com' 
        } 
      }, 
      { 
        id:6, 
        name:'Restaurant-E', 
        image_url:'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=bar-chairs-contemporary-1307698.jpg&fm=jpg', 
       discriptio:'- This blog is dedicated to affordable and delicious recipes, with a focus on meal prep and saving money on groceries.', 
 
location:'City-B', 
        contact:{ 
          phone:'123-456-7893', 
          email:'restaurante@example.com' 
        } 
      }, 
      { 
        id:7, 
        name:'Restaurant-F', 
        image_url:'https://www.hiddencitysecrets.com.au/wp-content/uploads/2016/01/album4711_36140_Eureka-89-restaurants-Melbourne-restaurant-fine-dining-private-good-top-best-005.jpg', 
       discriptio:'This blog focuses on vegetarian recipes that are both healthy and delicious, with a focus on using whole foods and seasonal ingredients', 
 
        location:'City-C', 
        contact:{ 
          phone:'123-456-7894', 
          email:'restaurantf@example.com' 
        } 
      }, 
      { 
        id:8, 
        name:'Restaurant-G', 
        image_url:'https://images.alphacoders.com/438/thumb-1920-438979.jpg', 
       discriptio:'This blog features a mix of healthy and indulgent recipes, with a focus on using fresh, whole ingredients and creative flavor combinations', 
 
       location:'City-E', 
        contact:{ 
          phone:'123-456-7895', 
          email:'restaurantg@example.com' 
        } 
      }, 
      { 
        id:9, 
        name:'Restaurant-H', 
        image_url:'https://i.pinimg.com/originals/eb/38/49/eb384921ef426f800baad39781f1105f.jpg', 
       discriptio:'This blog features a variety of sweet and savory recipes, as well as baking tips and tutorials', 
 
        location:'City-D', 
        contact:{ 
          phone:'123-456-7896', 
          email:'restauranth@example.com' 
        } 
      }, 
      { 
        id:10, 
        name:'Restaurant-I', 
        image_url:'http://cpmow.ru/upload/iblock/d16/DSC_6977.jpg', 
       discriptio:' This blog offers a wide range of recipes, as well as cooking tips, kitchen hacks, and product reviews', 
 
        location:'City-B', 
        contact:{ 
          phone:'123-456-7897', 
          email:'restauranti@example.com' 
        } 
      }, 
      { 
        id:11, 
        name:'Restaurant-J', 
        image_url:'https://1.bp.blogspot.com/-f9kpcIhyfvc/U6Gb9FjtflI/AAAAAAAAA3M/q16vMv_Rspk/s1600/Good+Restaurant+Interiors.jpg', 
       discriptio:'This blog features a mix of recipes, cooking tips, and community-driven content, with a focus on seasonal ingredients and home cooking', 
 
       location:'City-A', 
        contact:{ 
          phone:'123-456-7898', 
          email:'restaurantj@example.com' 
        } 
      }, 
      { 
        id:12, 
        name:'Restaurant-K', 
        image_url:'http://cpmow.ru/upload/iblock/b4c/DSC_6903.jpg', 
       discriptio:'a food blog with a scientific approach to cooking, offering detailed recipe instructions and product reviews.', 
 
      location:'City-C', 
        contact:{ 
          phone:'123-456-7899', 
          email:'restauranth@example.com' 
        } 
      }, 
      { 
        id:13, 
        name:'Restaurant-G', 
        image_url:'https://sie7e.ch/wp-content/uploads/2019/03/FotoRestaurant_Mittel.jpg', 
       discriptio:'a blog with a focus on healthy and vegetarian recipes, using whole foods and natural ingredients.', 
 
       location:'City-K', 
        contact:{ 
          phone:'123-456-7810', 
          email:'restaurantg@example.com' 
        } 
      }, 
      { 
        id:14, 
        name:'Restaurant-K', 
        image_url:'https://www.itl.cat/pngfile/big/194-1948367_restaurant.jpg', 
       discriptio:'a blog featuring family-friendly, classic recipes with step-by-step instructions and helpful tips.', 
 
       location:'City-A', 
        contact:{ 
          phone:'123-456-7820', 
          email:'restaurantk@example.com' 
        } 
      }, 
      { 
        id:15, 
        name:'Restaurant-L', 
        image_url:'https://tse3.mm.bing.net/th?id=OIP.yCwAW1pEgG_GTDdycLYNQgHaE8&pid=Api&P=0', 
       discriptio:'a food and travel blog by an American pastry chef living in Paris, featuring recipes, restaurant recommendations, and travel tips.', 
 
      location:'City-S', 
        contact:{ 
          phone:'123-456-7830', 
          email:'restaurantl@example.com' 
        } 
      }, 
      { 
        id:16, 
        name:'Restaurant-M', 
        image_url:'https://assets.wallpapersin4k.org/uploads/2017/04/Restaurant-HD-Wallpaper-22.jpg', 
       discriptio:'Iowa Girl Eats is a food blog that shares easy gluten-free recipes. You can also find dairy-free, low carb, low-fat, and vegan recipes on this site', 
 
      location:'City-A', 
        contact:{ 
          phone:'123-456-7840', 
          email:'restaurantm@example.com' 
        } 
      }, 
      { 
        id:17, 
        name:'Restaurant-N', 
        image_url:'https://rainerscafeandbar.com/site/user/images/restaurant.jpg', 
       discriptio:'Pinch of Yum is one of the best food blogs on the internet. It was started as a casual hobby for founder Lindsay Ostrom but is now a full-time business that reaches millions of people', 
 
      location:'City-D', 
        contact:{ 
          phone:'123-456-7850', 
          email:'restaurantn@example.com' 
        } 
      }, 
      { 
        id:18, 
        name:'Restaurant-P', 
        image_url:'https://cdn.theculturetrip.com/wp-content/uploads/2015/09/restaurant-1090136_1920.jpg', 
       discriptio:'Budget Bytes is another popular food blog that shares delicious recipes designed for small budgets. It has a simple design with a white, black and yellow color scheme', 
 
       location:'City-A', 
        contact:{ 
          phone:'123-456-7860', 
          email:'restaurantp@example.com' 
        } 
      }, 
      { 
        id:19, 
        name:'Restaurant-q',

image_url:'http://www.stanleyhotel.com/uploads/9/8/6/9/98696462/editor/20111115-cascades001v2_3.jpeg?1492712982', 
       discriptio:'This blog features a mix of healthy and indulgent recipes, with a focus on using fresh, whole ingredients and creative flavor combinations.', 
 
       location:'City-S', 
        contact:{ 
          phone:'123-456-7870', 
          email:'restaurantq@example.com' 
        } 
      }, 
 
 
    // Add more restaurants here... 
  ]; 
   
 
   
    
  // EventCard component  
  const RegisetrCard = ({ name, image_url, location, discription, contact,phone,email }) => {  
    const [isPopupOpen, setIsPopupOpen] = useState(false);  
    
    const handlePopupOpen = () => {  
      setIsPopupOpen(true);  
    };  
    
    const handlePopupClose = () => {  
      setIsPopupOpen(false);  
    }; 
    const [likes, setLikes] = useState(0); 
    const [dislikes, setDislikes] = useState(0); 
   
    const handleLike = () => { 
      setLikes(likes + 1); 
    }; 
   
    const handleDislike = () => { 
      setDislikes(dislikes + 1); 
    }; 
    return (  
      <div className="register-card">  
        <h3>{name}</h3>  
         
        <p>Location: {location}</p>  
        <button onClick={handlePopupOpen}>View Details</button>  
        {isPopupOpen && (  
          <div className="popup">  
            <div className="popup-content">  
              <h3>{name}</h3>   
              <p>Location: {location}</p>   
              <p>Blog: {discription}</p> 
              <button onClick={handlePopupClose}>Close</button> 
              <span onClick={handleLike}> 
          <span style={{ fontSize: '20px', cursor: 'pointer' }}>&#128077;</span> 
          <span>{likes}</span> 
        </span> 
        <span onClick={handleDislike}> 
          <span style={{ fontSize: '20px', cursor: 'pointer' }}>&#128078;</span> 
          <span>{dislikes}</span> 
          </span> 
            </div>  
          </div>  
        )}  
      </div>  
    );  
  };  
    
 
   
   
  const RestaurantList = () => { 
  return ( 
    <div className="restaurant-list"> 
      {restaurants.map((restaurant,index) => ( 
        <div key={restaurant.id} className="restaurant-card"> 
          {restaurant.image_url && <img src={restaurant.image_url} alt={restaurant.name} />} 
          <RegisetrCard 
          name={restaurant.name} 
          location={restaurant.location} 
          discription={restaurant.discription} 
           /> 
          
          <h2>{restaurant.location}</h2> 
          {restaurant.contact && ( 
            <div className="contact"> 
              <p>{restaurant.contact.phone}</p> 
              <p>{restaurant.contact.email}</p> 
            </div> 
          )} 
        </div> 
      ))} 
    </div> 
 
     
  ); 
}; 
 
export default RestaurantList;