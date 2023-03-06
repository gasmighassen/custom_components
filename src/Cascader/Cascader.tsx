import React, { useState } from "react";
import "../_dist/Cascader.css";

interface ArrayProp<T> {
  [key: string]: T;
}

interface CascaderProps {
  data: ArrayProp<any>[];
  keys: string[];
}

const Cascader: React.FC<CascaderProps> = ({ data, keys }) => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState({
    level1: "Please Select",
    level2: "",
    level3: "",
  });
  const [showSpeciality, setshowSpeciality] = useState(true);
  const [showSeniority, setShowSeniority] = useState(false);
  const [showField, setShowField] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const [active, setActive] = useState("");

  console.log(filter);
  const newData: { key: string; value: any }[] = [];
  data.map((d) =>
    keys.map((key) => {
      if (keys.includes(key)) {
        newData.push({ key: key, value: d[key] });
      }
    })
  );

  const unique = newData.filter(
    (obj, index) =>
      newData.findIndex(
        (item) => item.key === obj.key && item.value === obj.value
      ) === index
  );

  return (
    <div className="cascader" onBlur={() => setShow(!show)}>
      <div className="cascader-input" onClick={() => setShow(!show)}>
        <span className="selected-filter">
          {Object.values(filter).map((el) => `${el} `)}
        </span>
        <div className="arrow-logo">
          <img src="../../images/arrow_down_black.svg" alt="" />
        </div>
      </div>

      {show && (
        <div className="cascader-list">
          <ul className="filterKeys">
            <li
              className={active === "colored" ? "active" : "desactive"}
              onClick={() => {
                {
                  setFilter({
                    ...filter,
                    level1: "jobTitle",
                    level2: "",
                    level3: "",
                  });
                  setActive("colored");
                  setshowSpeciality(!showSpeciality);
                }
              }}
            >
              <span>Associative</span>
              <div className="arrow-logo">
                <img src="../../images/right_arrow.svg" alt="" />
              </div>
            </li>
            <li
              className={active === "colore" ? "active" : "desactive"}
              onClick={() => {
                {
                  setFilter({
                    ...filter,
                    level1: "LevelofExpertise",
                    level2: "",
                    level3: "",
                  });
                  setActive("colore");
                }
              }}
            >
              <span>Seniority</span>
              <div className="arrow-logo">
                <img src="../../images/right_arrow.svg" alt="" />
              </div>
            </li>
            <li
              className={active === "color" ? "active" : "desactive"}
              onClick={() => {
                setFilter({
                  ...filter,
                  level1: "field",
                  level2: "",
                  level3: "",
                });
                setActive("color");
                setShowSeniority(!showSeniority);
              }}
            >
              <span>Field</span>
              <div className="arrow-logo">
                <img src="../../images/right_arrow.svg" alt="" />
              </div>
            </li>
            <li
              className={active === "colo" ? "active" : "desactive"}
              onClick={() => {
                setFilter({
                  ...filter,
                  level1: "industry",
                  level2: "",
                  level3: "",
                });
                setActive("colo");
                setShowField(!showField);
              }}
            >
              <span>Industry</span>
              <div className="arrow-logo">
                <img src="../../images/right_arrow.svg" alt="" />
              </div>
            </li>
          </ul>
          {filter.level1 === "jobTitle" && (
            <>
              <ul className="level1-wrapper">
                {unique
                  .filter((f) => f.key === "jobTitle")
                  .map((el, i) => (
                    <li
                      className="level1-item"
                      key={i}
                      onClick={() => {
                        setshowSpeciality(true);
                        setFilter({ ...filter, level2: el.value });
                      }}
                    >
                      <span> {el.value}</span>
                      <div className="arrow-logo">
                        <img src="../../images/right_arrow.svg" alt="" />
                      </div>
                    </li>
                  ))}
              </ul>
              {showSpeciality && (
                <ul className="speciality">
                  {unique
                    .filter((sp) => sp.key === "Speciality")
                    .map((elem, i) => (
                      <li
                        className="level2-item"
                        key={i}
                        onClick={() =>
                          setFilter({ ...filter, level3: elem.value })
                        }
                      >
                        {elem.value}
                      </li>
                    ))}
                </ul>
              )}
            </>
          )}
          {filter.level1 === "LevelofExpertise" && (
            <>
              {" "}
              <ul className="level1-wrapper">
                {unique
                  .filter((f) => f.key === "LevelofExpertise")
                  .map((el, i) => (
                    <li
                      className="level1-item"
                      key={i}
                      onClick={() => {
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                        setShowSeniority(!showSeniority);
                      }}
                    >
                      {el.value}
                    </li>
                  ))}
              </ul>
              {showSeniority && (
                <ul className="jobTitle">
                  {unique
                    .filter((sp) => sp.key === "jobTitle")
                    .map((elem, i) => (
                      <li
                        className="level2-item"
                        key={i}
                        onClick={() =>
                          setFilter({ ...filter, level3: elem.value })
                        }
                      >
                        {elem.value}
                      </li>
                    ))}
                </ul>
              )}
            </>
          )}
          {filter.level1 === "field" && (
            <>
              <ul className="level1-wrapper">
                {unique
                  .filter((f) => f.key === "field")
                  .map((el, i) => (
                    <li
                      className="level1-item"
                      key={i}
                      onClick={() => {
                        setShowField(!showField);
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                      }}
                    >
                      {el.value}
                    </li>
                  ))}
              </ul>
              {showField && (
                <ul className="jobTitle">
                  {unique
                    .filter((sp) => sp.key === "jobTitle")
                    .map((elem, i) => (
                      <li
                        className="level2-item"
                        key={i}
                        onClick={() =>
                          setFilter({ ...filter, level3: elem.value })
                        }
                      >
                        {elem.value}
                      </li>
                    ))}
                </ul>
              )}
            </>
          )}

          {filter.level1 === "industry" && (
            <>
              {" "}
              <ul className="level1-wrapper">
                {unique
                  .filter((f) => f.key === "industry")
                  .map((el, i) => (
                    <li
                      className="level1-item"
                      key={i}
                      onClick={() => {
                        setShowIndustry(!showIndustry);
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                      }}
                    >
                      {el.value}
                    </li>
                  ))}
              </ul>
              {showIndustry && (
                <ul className="jobTitle">
                  {unique
                    .filter((sp) => sp.key === "jobTitle")
                    .map((elem, i) => (
                      <li
                        className="level2-item"
                        key={i}
                        onClick={() =>
                          setFilter({ ...filter, level3: elem.value })
                        }
                      >
                        {elem.value}
                      </li>
                    ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cascader;
