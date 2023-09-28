import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionTitle from "./SectionTitle";
const testimonialData = [
  {
    id: 1,
    avatar: "assets/img/avatar-1.jpg",
    name: "Olisa Agbafor",
    designation: "CEO",
    company: "Zecoms Entreprise",
    comment:
      "As a fellow developer, I appreciate the simplicity yet power behind the web3 product Ikem built for us. He delivered a polished, user-friendly application that exceeded our expectations. Ikem will always be my first call for blockchain development services.",
  },
  {
    id: 2,
    avatar: "assets/img/avatar-2.jpg",
    name: "Isaac Ekhaguere",
    designation: "CEO",
    company: "smart Earners Team",
    comment:
      "Ikem conceived and built our decentralized app entirely from scratch. Not only did he turn our vision into reality, he also suggested enhancements that made the workflow far more efficient. We're so grateful for his creativity and coding skills",
  },
  {
    id: 3,
    avatar: "assets/img/avatar-3.jpg",
    name: "Bruno Chikeka",
    designation: "Founder & CEO",
    company: "climecheck network",
    comment:
      "I was thoroughly impressed with Ikem's skills - not only is he a talented developer, but he also provided helpful suggestions that improved the end product. I highly recommend his services.",
  },
  {
    id: 4,
    avatar: "assets/img/avatar-3.jpg",
    name: "Feezy",
    designation: "Founder",
    company: "InsideTheHive",
    comment:
      "We desperately needed a new website before our product launch. Ikem was able to design and build an incredible site in a few days! He communicated every step of the way and delivered an amazing finished product. We'll be hiring him again for all our web needs.",
  },
];
const Testimonial = () => {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          heading={"Client's Kind Word"}
          subHeading={"Testimonial"}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          {testimonialData.map((testimonial) => (
            <SwiperSlide className="feature-box-03" key={testimonial.id}>
              <div className="feature-img">
                <img src={testimonial.avatar} alt="image" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left" />
                </div>
                <p>{testimonial.comment}</p>
                <h6>{testimonial.name}</h6>
                <span>
                  {testimonial.designation} at {testimonial.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
