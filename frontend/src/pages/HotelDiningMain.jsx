import { useEffect } from "react";
import "./HotelDining.css";

const HotelDining = () => {
  const restaurants = [
    {
      id: 1,
      name: "Magnoliya Multi Cuisine Restaurant",
      subheading: "Fine Dining from Around the World",
      description:
        "Magnoliya offers fine dining from around the world in an elegant setting, making it a premier destination for beautiful events. Known for its diverse international menu and warm hospitality, Magnoliya has hosted countless weddings, birthdays, anniversaries, and corporate gatherings—each tailored to reflect the unique tastes and traditions of its guests. Whether it's a grand celebration or an intimate affair, every occasion at Magnoliya is marked by exceptional cuisine, personalized service, and a truly memorable experience.",
      image: "/aboutpage/DSC00195.jpg",
      badge: "Global Flavors",
      features: ["International Menu", "Event Dining", "Personalized Service"],
    },
    {
      id: 2,
      name: "Garden and Grille Restaurant and Bar",
      subheading: "Relaxed Yet Refined Dining",
      description:
        "Located within the Hilton Garden Inn, just steps away from our main venue, the Garden and Grille Restaurant and Bar has been serving hotel guests and local diners since its opening in 2020. Known for its relaxed yet refined atmosphere, the restaurant offers a diverse menu of freshly prepared dishes, handcrafted cocktails, and classic favorites—perfect for breakfast, lunch, dinner, or a casual drink. Whether you're attending an event at our venue or staying at the Hilton Garden Inn, Garden and Grille provides a convenient and satisfying dining experience for travelers, business guests, and locals alike.",
      image: "/aboutpage/DSC00236.jpg",
      badge: "Since 2020",
      features: ["Casual Dining", "Cocktail Bar", "Hotel Proximity"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".DiningRestaurant-card");
      const gallery = document.querySelector(".DiningGallery-iframe");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          card.classList.add("animate");
        }
      });
      if (gallery) {
        const galleryRect = gallery.getBoundingClientRect();
        if (galleryRect.top <= window.innerHeight * 0.8) {
          gallery.classList.add("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="DiningContainer">
      {/* Hero Section */}
      <section className="DiningHero">
        <div className="DiningHero-bg"></div>
        <div className="DiningHero-content">
          <h1>Culinary Excellence</h1>
          <p>
            Embark on an exquisite journey at our world-class restaurants, where
            master chefs craft extraordinary dining experiences tailored for
            every occasion. From elegant wedding receptions and lavish banquets
            to corporate luncheons and private celebrations, our culinary team
            delivers exquisite flavors, artful presentation, and unforgettable
            moments for you and your guests.
          </p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="DiningRestaurants-section" id="restaurants">
        <div className="DiningContainer-inner">
          <h2 className="DiningSection-title">Our Signature Restaurants</h2>
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
                  <p className="DiningCuisine-type">{restaurant.subheading}</p>
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
                </div>
              </div>
            ))}
          </div>
          {/* <div className="DiningGallery-iframe">
            <iframe
              src="https://pronine.pixieset.com/magnoliya360/fotos/"
              title="Magnoliya Dining Gallery"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HotelDining;
