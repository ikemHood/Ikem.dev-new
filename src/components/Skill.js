import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "JS", icon: "fab fa-js-square" },
  { id: 2, name: "Next Js", icon: "fab fa-react" },
  { id: 3, name: "Node JS", icon: "fab fa-node" },
  { id: 4, name: "Ethers Js", icon: "fab fa-ethereum" },
  { id: 5, name: "Solidity", icon: "fab fa-redhat" },
  { id: 6, name: "Git", icon: "fab fa-git-square" },
  { id: 7, name: "Docker", icon: "fab fa-docker" },
];
const experiencesData = [
  {
    id: 1,
    date: "Jun 2021 - Dec 2021",
    designation: "Frontend developer",
    company: "kryptolite.rocks",
  },
  {
    id: 2,
    date: "May 2022 - Sep 2022",
    designation: "Frontend developer",
    company: "Crypto Bootcamp Community",
  },
  {
    id: 3,
    date: "Jul 2022 - Present",
    designation: "Web3 developer",
    company: "kimberlite.rocks",
  },
  {
    id: 4,
    date: "Sep 2022 - Present",
    designation: "Blockchain developer",
    company: "climecheck.network",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section  bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={`Exceptional web3 developer crafting cutting-edge experiences. Mastery of Solidity, JavaScript, NextJs. Specialized in building decentralized apps and products.`
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/avatar.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
