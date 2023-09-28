import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Climecheck",
    subtitle: "Climate monitoring WebApp",
    image: "assets/img/climecheck.png",
  },
  {
    id: 2,
    title: "Kimberlite",
    subtitle: "DeFi Infrastructure",
    image: "assets/img/kimberlite.png",
  },
  {
    id: 3,
    title: "BountySwap",
    subtitle: "Cross chain Dex Aggregator",
    image: "assets/img/bountyDex.png",
  },
  {
    id: 4,
    title: "SuiPirate",
    subtitle: "NFT Unboarding WebApp",
    image: "assets/img/suipirate.png",
  },
  {
    id: 5,
    title: "SocioPal",
    subtitle: "Waitlist Landing Page",
    image: "assets/img/sociopal.png",
  },
  {
    id: 6,
    title: "LedgerTech",
    subtitle: "Agency website",
    image: "assets/img/ledgerTech.png",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
