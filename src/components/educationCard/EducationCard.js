import React, { useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const { isDark } = useContext(StyleContext);

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}

          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={`education-text-subHeader ${
                  isDark ? "dark-mode" : ""
                }`}
              >
                {school.subHeader}
              </h5>

              <p
                className={`education-text-duration ${
                  isDark ? "dark-mode" : ""
                }`}
              >
                {school.duration}
              </p>

              <p className="education-text-desc">{school.desc}</p>

              {school.descBullets && (
                <ul className="education-text-bullets">
                  {school.descBullets.map((item, i) => (
                    <li key={i} className="subTitle">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Fade>

      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </>
  );
}
