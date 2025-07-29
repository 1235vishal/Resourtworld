// import { useState } from "react";
// import "./HotelDining.css";

// const HotelDining = () => {
//   const [previewMenu, setPreviewMenu] = useState(null);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const handleMenuAction = (menuFile, action) => {
//     if (action === "download") {
//       // Create a temporary anchor element to trigger download
//       const link = document.createElement("a");
//       link.href = `/menus/${menuFile}.pdf`;
//       link.download = `${menuFile}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       setPreviewMenu(menuFile);
//     }
//   };

//   const closeMenuPreview = () => {
//     setPreviewMenu(null);
//   };

//   const restaurants = [
//     {
//       id: 1,
//       name: "Le Jardin",
//       cuisine: "French Fine Dining",
//       description:
//         "Experience the pinnacle of French culinary artistry in our elegant dining room, where classic techniques meet contemporary presentation in an atmosphere of refined luxury.",
//       image:
//         "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//       badge: "Michelin ⭐",
//       features: ["Michelin Recommended", "Wine Pairing", "Private Dining"],
//       recommendation:
//         "Try our signature Duck Confit with seasonal vegetables and our award-winning wine selection from Burgundy.",
//       menu: "french-menu",
//       bookingLink:
//         "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 2,
//       name: "Sakura Sushi",
//       cuisine: "Authentic Japanese",
//       description:
//         "Immerse yourself in the art of Japanese cuisine with our authentic sushi bar and traditional teppanyaki experience, featuring the freshest ingredients.",
//       image:
//         "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
//       badge: "Authentic",
//       features: ["Sushi Counter", "Teppanyaki", "Sake Selection"],
//       recommendation:
//         "Don't miss our Omakase experience featuring the freshest seasonal fish and our signature miso-glazed cod.",
//       menu: "japanese-menu",
//       bookingLink:
//         "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     // {
//     //   id: 3,
//     //   name: "Villa Italiana",
//     //   cuisine: "Traditional Italian",
//     //   description:
//     //     "Savor authentic Italian flavors in our warm, family-style atmosphere with house-made pasta and wood-fired pizzas crafted by Italian masters.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
//     //   badge: "Traditional",
//     //   features: ["Wood-Fired Oven", "Fresh Pasta", "Italian Wines"],
//     //   recommendation:
//     //     "Our handmade Truffle Risotto and Neapolitan Pizza Margherita are must-try dishes paired with our Chianti Classico.",
//     //   menu: "italian-menu",
//     //   bookingLink:
//     //     "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     // },
//     // {
//     //   id: 4,
//     //   name: "Garden Terrace",
//     //   cuisine: "Contemporary International",
//     //   description:
//     //     "Enjoy fresh, healthy cuisine on our beautiful outdoor terrace with panoramic city views and farm-to-table ingredients sourced locally.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     //   badge: "Farm-to-Table",
//     //   features: ["Outdoor Dining", "Farm-to-Table", "Vegetarian Options"],
//     //   recommendation:
//     //     "Our quinoa-crusted salmon with organic vegetables and our signature avocado toast are perfect for a healthy, delicious meal.",
//     //   menu: "contemporary-menu",
//     //   bookingLink:
//     //     "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     // },
//   ];

//   // Menu data for each restaurant
//   const menuData = {
//     "french-menu": {
//       starters: [
//         { name: "French Onion Soup", price: "$12" },
//         { name: "Escargot", price: "$18" },
//         { name: "Foie Gras", price: "$24" },
//         { name: "Salade Niçoise", price: "$16" },
//       ],
//       mains: [
//         { name: "Duck Confit", price: "$32" },
//         { name: "Boeuf Bourguignon", price: "$38" },
//         { name: "Ratatouille", price: "$26" },
//         { name: "Coq au Vin", price: "$34" },
//       ],
//       desserts: [
//         { name: "Crème Brûlée", price: "$12" },
//         { name: "Tarte Tatin", price: "$14" },
//         { name: "Macarons", price: "$10" },
//         { name: "Soufflé au Chocolat", price: "$16" },
//       ],
//     },
//     "japanese-menu": {
//       starters: [
//         { name: "Edamame", price: "$6" },
//         { name: "Miso Soup", price: "$5" },
//         { name: "Agedashi Tofu", price: "$8" },
//         { name: "Gyoza", price: "$10" },
//       ],
//       mains: [
//         { name: "Sushi Platter", price: "$28" },
//         { name: "Sashimi Selection", price: "$32" },
//         { name: "Teriyaki Chicken", price: "$22" },
//         { name: "Tempura Udon", price: "$18" },
//       ],
//       desserts: [
//         { name: "Mochi Ice Cream", price: "$8" },
//         { name: "Matcha Tiramisu", price: "$10" },
//         { name: "Dorayaki", price: "$7" },
//         { name: "Green Tea", price: "$4" },
//       ],
//     },
//     "italian-menu": {
//       starters: [
//         { name: "Bruschetta", price: "$10" },
//         { name: "Caprese Salad", price: "$14" },
//         { name: "Antipasto Platter", price: "$18" },
//         { name: "Minestrone", price: "$9" },
//       ],
//       mains: [
//         { name: "Spaghetti Carbonara", price: "$22" },
//         { name: "Margherita Pizza", price: "$18" },
//         { name: "Osso Buco", price: "$32" },
//         { name: "Risotto al Funghi", price: "$24" },
//       ],
//       desserts: [
//         { name: "Tiramisu", price: "$12" },
//         { name: "Panna Cotta", price: "$10" },
//         { name: "Cannoli", price: "$8" },
//         { name: "Gelato", price: "$7" },
//       ],
//     },
//     "contemporary-menu": {
//       starters: [
//         { name: "Avocado Toast", price: "$12" },
//         { name: "Quinoa Salad", price: "$14" },
//         { name: "Beetroot Carpaccio", price: "$16" },
//         { name: "Tuna Tartare", price: "$18" },
//       ],
//       mains: [
//         { name: "Quinoa-Crusted Salmon", price: "$28" },
//         { name: "Grilled Chicken", price: "$22" },
//         { name: "Vegetable Wellington", price: "$24" },
//         { name: "Ribeye Steak", price: "$36" },
//       ],
//       desserts: [
//         { name: "Chia Pudding", price: "$10" },
//         { name: "Flourless Chocolate Cake", price: "$12" },
//         { name: "Fruit Platter", price: "$14" },
//         { name: "Cheese Board", price: "$18" },
//       ],
//     },
//   };

//   return (
//     <div className="DiningContainer">
//       {/* Hero Section */}
//       <section className="DiningHero">
//         <div className="DiningHero-bg"></div>
//         <div className="DiningHero-content">
//           <h1>Culinary Excellence</h1>
//           <p>
//             Embark on a gastronomic journey through our world-class restaurants,
//             where master chefs create extraordinary dining experiences.
//           </p>
//           <button
//             className="DiningCta-button"
//             onClick={() => scrollToSection("restaurants")}
//           >
//             Explore Our Restaurants
//           </button>
//         </div>
//       </section>

//       {/* Restaurants Section */}
//       <section className="DiningRestaurants-section" id="restaurants">
//         <div className="DiningContainer-inner">
//           <h2 className="DiningSection-title">Our Signature Restaurants</h2>
//           <p className="DiningSection-subtitle">
//             Discover exceptional dining experiences crafted by world-renowned
//             chefs
//           </p>

//           <div className="DiningRestaurants-grid">
//             {restaurants.map((restaurant) => (
//               <div className="DiningRestaurant-card" key={restaurant.id}>
//                 <div className="DiningRestaurant-image">
//                   <img
//                     src={restaurant.image}
//                     alt={`${restaurant.name} Restaurant`}
//                   />
//                   <div className="DiningRestaurant-badge">
//                     {restaurant.badge}
//                   </div>
//                 </div>
//                 <div className="DiningRestaurant-content">
//                   <h3 className="DiningRestaurant-name">{restaurant.name}</h3>
//                   <p className="DiningCuisine-type">{restaurant.cuisine}</p>
//                   <p className="DiningRestaurant-description">
//                     {restaurant.description}
//                   </p>

//                   <div className="DiningRestaurant-features">
//                     {restaurant.features.map((feature, index) => (
//                       <span className="DiningFeature-tag" key={index}>
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="DiningChef-recommendation">
//                     <div className="DiningChef-rec-title">
//                       Chef's Recommendation
//                     </div>
//                     <div className="DiningChef-rec-content">
//                       {restaurant.recommendation}
//                     </div>
//                   </div>

//                   <div className="DiningRestaurant-actions">
//                     <a
//                       href={restaurant.bookingLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="DiningAction-btn DiningPrimary-btn"
//                     >
//                       Make a Reservation
//                     </a>
//                     <div className="DiningMenu-options">
//                       <button
//                         className="DiningAction-btn DiningSecondary-btn"
//                         onClick={() =>
//                           handleMenuAction(restaurant.menu, "preview")
//                         }
//                       >
//                         View Menu
//                       </button>
//                       {/* <button
//                         className="DiningAction-btn DiningTertiary-btn"
//                         onClick={() =>
//                           handleMenuAction(restaurant.menu, "download")
//                         }
//                       >
//                         Download Menu (PDF)
//                       </button> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Menu Preview Modal */}
//       {previewMenu && (
//         <div className="DiningModal" onClick={closeMenuPreview}>
//           <div className="DiningModal-content menu-preview">
//             <span className="DiningClose-modal" onClick={closeMenuPreview}>
//               &times;
//             </span>
//             <h2>
//               {restaurants.find((r) => r.menu === previewMenu)?.name} Menu
//             </h2>
//             <div className="DiningMenu-preview">
//               <div className="DiningMenu-header">
//                 <h3>{restaurants.find((r) => r.menu === previewMenu)?.name}</h3>
//                 <p>
//                   {restaurants.find((r) => r.menu === previewMenu)?.cuisine}
//                 </p>
//               </div>

//               <div className="DiningMenu-section">
//                 <h4>Starters</h4>
//                 <ul>
//                   {menuData[previewMenu]?.starters.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - {item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="DiningMenu-section">
//                 <h4>Main Courses</h4>
//                 <ul>
//                   {menuData[previewMenu]?.mains.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - {item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="DiningMenu-section">
//                 <h4>Desserts</h4>
//                 <ul>
//                   {menuData[previewMenu]?.desserts.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - {item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* <button
//                 className="DiningAction-btn DiningTertiary-btn"
//                 onClick={() => handleMenuAction(previewMenu, "download")}
//               >
//                 Download Full Menu (PDF)
//               </button> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelDining;

import { useState } from "react";
import "./HotelDining.css";

const HotelDining = () => {
  const [previewMenu, setPreviewMenu] = useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleMenuAction = (menuFile, action) => {
    if (action === "download") {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = `/menus/${menuFile}.pdf`;
      link.download = `${menuFile}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setPreviewMenu(menuFile);
    }
  };

  const closeMenuPreview = () => {
    setPreviewMenu(null);
  };

  const restaurants = [
    {
      id: 1,
      name: "Le Jardin",
      cuisine: "French Fine Dining",
      description:
        "Experience the pinnacle of French culinary artistry in our elegant dining room, where classic techniques meet contemporary presentation in an atmosphere of refined luxury.",
      image:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      badge: "Michelin ⭐",
      features: ["Michelin Recommended", "Wine Pairing", "Private Dining"],
      recommendation:
        "Try our signature Duck Confit with seasonal vegetables and our award-winning wine selection from Burgundy.",
      menu: "french-menu",
      bookingLink:
        "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 2,
      name: "Sakura Sushi",
      cuisine: "Authentic Japanese",
      description:
        "Immerse yourself in the art of Japanese cuisine with our authentic sushi bar and traditional teppanyaki experience, featuring the freshest ingredients.",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      badge: "Authentic",
      features: ["Sushi Counter", "Teppanyaki", "Sake Selection"],
      recommendation:
        "Don't miss our Omakase experience featuring the freshest seasonal fish and our signature miso-glazed cod.",
      menu: "japanese-menu",
      bookingLink:
        "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
  ];

  // Menu data for each restaurant
  const menuData = {
    "french-menu": {
      starters: [
        { name: "French Onion Soup", price: "$12" },
        { name: "Escargot", price: "$18" },
        { name: "Foie Gras", price: "$24" },
        { name: "Salade Niçoise", price: "$16" },
      ],
      mains: [
        { name: "Duck Confit", price: "$32" },
        { name: "Boeuf Bourguignon", price: "$38" },
        { name: "Ratatouille", price: "$26" },
        { name: "Coq au Vin", price: "$34" },
      ],
      desserts: [
        { name: "Crème Brûlée", price: "$12" },
        { name: "Tarte Tatin", price: "$14" },
        { name: "Macarons", price: "$10" },
        { name: "Soufflé au Chocolat", price: "$16" },
      ],
    },
    "japanese-menu": {
      starters: [
        { name: "Edamame", price: "$6" },
        { name: "Miso Soup", price: "$5" },
        { name: "Agedashi Tofu", price: "$8" },
        { name: "Gyoza", price: "$10" },
      ],
      mains: [
        { name: "Sushi Platter", price: "$28" },
        { name: "Sashimi Selection", price: "$32" },
        { name: "Teriyaki Chicken", price: "$22" },
        { name: "Tempura Udon", price: "$18" },
      ],
      desserts: [
        { name: "Mochi Ice Cream", price: "$8" },
        { name: "Matcha Tiramisu", price: "$10" },
        { name: "Dorayaki", price: "$7" },
        { name: "Green Tea", price: "$4" },
      ],
    },
  };

  return (
    <div className="DiningContainer">
      {/* Hero Section */}
      <section className="DiningHero">
        <div className="DiningHero-bg"></div>
        <div className="DiningHero-content">
          <h1>Culinary Excellence</h1>
          <p>
            Embark on a gastronomic journey through our world-class restaurants,
            where master chefs create extraordinary dining experiences.
          </p>
          <button
            className="DiningCta-button"
            onClick={() => scrollToSection("restaurants")}
          >
            Explore Our Restaurants
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="DiningRestaurants-section" id="restaurants">
        <div className="DiningContainer-inner">
          <h2 className="DiningSection-title">Our Signature Restaurants</h2>
          <p className="DiningSection-subtitle">
            Discover exceptional dining experiences crafted by world-renowned
            chefs
          </p>

          <div className="DiningRestaurants-grid">
            {restaurants.map((restaurant) => (
              <div className="DiningRestaurant-card" key={restaurant.id}>
                <div className="DiningRestaurant-image">
                  <img
                    src={restaurant.image}
                    alt={`${restaurant.name} Restaurant`}
                  />
                  <div className="DiningRestaurant-badge">
                    {restaurant.badge}
                  </div>
                </div>
                <div className="DiningRestaurant-content">
                  <h3 className="DiningRestaurant-name">{restaurant.name}</h3>
                  <p className="DiningCuisine-type">{restaurant.cuisine}</p>
                  <p className="DiningRestaurant-description">
                    {restaurant.description}
                  </p>

                  <div className="DiningRestaurant-features">
                    {restaurant.features.map((feature, index) => (
                      <span className="DiningFeature-tag" key={index}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="DiningChef-recommendation">
                    <div className="DiningChef-rec-title">
                      Chef's Recommendation
                    </div>
                    <div className="DiningChef-rec-content">
                      {restaurant.recommendation}
                    </div>
                  </div>

                  <div className="DiningRestaurant-actions">
                    <a
                      href={restaurant.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="DiningAction-btn DiningPrimary-btn"
                    >
                      Make a Reservation
                    </a>
                    <div className="DiningMenu-options">
                      <a
                        href="https://gardengrilleandbar.com/menu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="DiningAction-btn DiningSecondary-btn"
                      >
                        View Menu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Modal */}
      {previewMenu && (
        <div className="DiningModal" onClick={closeMenuPreview}>
          <div className="DiningModal-content menu-preview">
            <span className="DiningClose-modal" onClick={closeMenuPreview}>
              ×
            </span>
            <h2>
              {restaurants.find((r) => r.menu === previewMenu)?.name} Menu
            </h2>
            <div className="DiningMenu-preview">
              <div className="DiningMenu-header">
                <h3>{restaurants.find((r) => r.menu === previewMenu)?.name}</h3>
                <p>
                  {restaurants.find((r) => r.menu === previewMenu)?.cuisine}
                </p>
              </div>

              <div className="DiningMenu-section">
                <h4>Starters</h4>
                <ul>
                  {menuData[previewMenu]?.starters.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="DiningMenu-section">
                <h4>Main Courses</h4>
                <ul>
                  {menuData[previewMenu]?.mains.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="DiningMenu-section">
                <h4>Desserts</h4>
                <ul>
                  {menuData[previewMenu]?.desserts.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDining;
