import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Web Development",
    icon: "bi bi-laptop",
    desc: "I create stunning, responsive websites that help businesses attract and engage customers online. My custom designs and robust code bring your brand to life.",
  },
  {
    id: 2,
    name: "Smart contract Developmennt",
    icon: "fab fa-redhat",
    desc: "I develop secure, tested smart contracts on Ethereum and other blockchain networks to power your decentralized applications and crypto initiatives. Trust me to code complex dApps right.",
  },
  {
    id: 3,
    name: "Web3 Utility Product",
    icon: "fab fa-ethereum",
    desc: "I build innovative web3 products that solve real-world problems, from DeFi to supply chain optimization. My deep blockchain expertise produces user-friendly utilities that deliver real value.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
