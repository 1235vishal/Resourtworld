import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./Styles/ServicesSection.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const servicesGridRef = useRef(null);

  //   const servicesData = [
  //     {
  //       id: "corporate-catering",
  //       title: "Corporate",
  //       subtitle: "Professional catering solutions for your business events",
  //       image:
  //         "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  //       alt: "Corporate catering event with professionals",
  //       link: "/corporateevents",
  //     },
  //     {
  //       id: "baby-shower",
  //       title: "Baby Shower",
  //       subtitle: "Memorable celebrations with exceptional service",
  //       image:
  //         "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  //       alt: "Party catering with cocktails and drinks",
  //       link: "/Wedding",
  //     },
  //     {
  //       id: "wedding-catering",
  //       title: "Wedding",
  //       subtitle: "Your perfect day deserves perfect catering",
  //       image:
  //         "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  //       alt: "Elegant wedding venue setup",
  //       link: "/Wedding",
  //     },
  //     {
  //       id: "event-planning",
  //       title: "Event Planning",
  //       subtitle: "Complete event management from concept to execution",
  //       image:
  //         "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  //       alt: "Event planning and decoration setup",
  //       link: "/EventServices",
  //     },
  //   ];

  const servicesData = [
    {
      id: "corporate-catering",
      title: "Corporate",
      subtitle: "Professional catering solutions for your business events",
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww",
      alt: "Corporate catering event with professionals",
      link: "/corporateevents",
    },
    {
      id: "baby-shower",
      title: "Baby Shower",
      subtitle: "Memorable celebrations with exceptional service",
      image:
        "https://wp-media-partyslate.imgix.net/2023/03/can-bearly-wait_1483718-scaled.jpg?auto=compress%2Cformat&fit=scale&h=841&ixlib=php-3.3.1&w=1260&wpsize=huge",
      alt: "Baby shower celebration with balloons and cake",
      link: "/BabyShower",
    },
    {
      id: "wedding-catering",
      title: "Wedding",
      subtitle: "Your perfect day deserves perfect catering",
      image:
        "https://images.unsplash.com/photo-1625076932159-61a032e2b7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGV2ZW50fGVufDB8fDB8fHww",
      alt: "Bride and groom at wedding reception",
      link: "/Wedding",
    },
    {
      id: "event-planning",
      title: "Event Planning",
      subtitle: "Complete event management from concept to execution",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Event planning and decoration setup",
      link: "/EventServices",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title and subtitle
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      titleTimeline
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Animate service cards
      const serviceCards =
        servicesGridRef.current.querySelectorAll(".service-card");

      serviceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax effect for service cards
      serviceCards.forEach((card) => {
        gsap.to(card, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (service) => {
    // Open service page in new tab
    window.open(service.link);
  };

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-main-title" ref={titleRef}>
            Welcome to Grenda, a premier venu and event
          </h2>
          {/* <p className="services-main-subtitle" ref={subtitleRef}>
            planning company in New York, USA.
          </p> */}
        </div>

        {/* Services Grid - Exact Layout Match */}
        <div className="services-grid" ref={servicesGridRef}>
          {/* Corporate - Large Left Card */}
          <div
            className="service-card service-card--corporate"
            onClick={() => handleServiceClick(servicesData[0])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(servicesData[0]);
              }
            }}
            aria-label={`Learn more about ${servicesData[0].title} services`}
          >
            <div className="service-card__image-container">
              <img
                src={servicesData[0].image}
                alt={servicesData[0].alt}
                className="service-card__image"
                loading="lazy"
              />
              <div className="service-card__overlay"></div>
            </div>

            <div className="service-card__content">
              <h3 className="service-card__title">{servicesData[0].title}</h3>
            </div>
          </div>

          {/* Parties - Top Right Card */}
          <div
            className="service-card service-card--parties"
            onClick={() => handleServiceClick(servicesData[1])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(servicesData[1]);
              }
            }}
            aria-label={`Learn more about ${servicesData[1].title} services`}
          >
            <div className="service-card__image-container">
              <img
                src={servicesData[1].image}
                alt={servicesData[1].alt}
                className="service-card__image"
                loading="lazy"
              />
              <div className="service-card__overlay"></div>
            </div>

            <div className="service-card__content">
              <h3 className="service-card__title">{servicesData[1].title}</h3>
            </div>
          </div>

          {/* Wedding - Bottom Left of Right Side */}
          <div
            className="service-card service-card--wedding"
            onClick={() => handleServiceClick(servicesData[2])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(servicesData[2]);
              }
            }}
            aria-label={`Learn more about ${servicesData[2].title} services`}
          >
            <div className="service-card__image-container">
              <img
                src={servicesData[2].image}
                alt={servicesData[2].alt}
                className="service-card__image"
                loading="lazy"
              />
              <div className="service-card__overlay"></div>
            </div>

            <div className="service-card__content">
              <h3 className="service-card__title">{servicesData[2].title}</h3>
            </div>
          </div>

          {/* Event Planning - Bottom Right of Right Side */}
          <div
            className="service-card service-card--event-planning"
            onClick={() => handleServiceClick(servicesData[3])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(servicesData[3]);
              }
            }}
            aria-label={`Learn more about ${servicesData[3].title} services`}
          >
            <div className="service-card__image-container">
              <img
                src={servicesData[3].image}
                alt={servicesData[3].alt}
                className="service-card__image"
                loading="lazy"
              />
              <div className="service-card__overlay"></div>
            </div>

            <div className="service-card__content">
              <h3 className="service-card__title">{servicesData[3].title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="services-decorative-elements">
        <div className="decorative-circle decorative-circle--1"></div>
        <div className="decorative-circle decorative-circle--2"></div>
        <div className="decorative-line decorative-line--1"></div>
        <div className="decorative-line decorative-line--2"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
