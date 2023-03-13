import React, { useEffect, useState } from "react";
import "../_dist/Cascader.css";

interface ArrayProp<T> {
  [key: string]: T;
}

interface CascaderProps {
  data: ArrayProp<any>[];
  keys: string[];
  value: React.Dispatch<any>;
}

const Cascader: React.FC<CascaderProps> = ({ data, keys, value }) => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState({
    level1: "Please Select",
    level2: "",
    level3: "",
  });

  const [showSpeciality, setshowSpeciality] = useState(true);
  const [showSeniority, setShowSeniority] = useState(true);
  const [showField, setShowField] = useState(true);
  const [showIndustry, setShowIndustry] = useState(true);
  const [active, setActive] = useState<any>();
  const [active2, setActive2] = useState<any>();
  const [active3, setActive3] = useState<any>();
  useEffect(() => {
    value(filter);
  }, [filter]);

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
    <div
      className="cascader"
      tabIndex={0}
      onBlur={() => {
        setShow(false);
      }}
    >
      <div className="cascader-input" onClick={() => setShow(!show)}>
        <span className="selected-filter">
          {Object.values(filter).map((el) => `${el} `)}
        </span>
        <div className="arrow-logo">
          {show ? (
            <img src="../../images/arrow_down_black.svg" alt="" />
          ) : (
            <img src="../../images/right_arrow.svg" alt="" />
          )}
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
                  setshowSpeciality(false);
                  setActive2(-1);
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
                  setShowSeniority(false);
                  setActive2(-1);
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
                setShowField(false);
                setActive2(-1);
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
                setShowIndustry(false);
                setActive2(-1);
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
                  .map((el, i: any) => (
                    <li
                      className={active2 === i ? "active" : "desactive"}
                      key={i}
                      onClick={() => {
                        setshowSpeciality(true);
                        setFilter({ ...filter, level2: el.value });
                        setActive2(i);
                        setActive3(-1);
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
                        className={active3 === i ? "active" : "desactive"}
                        key={i}
                        onClick={() => {
                          setFilter({ ...filter, level3: elem.value });
                          setActive3(i);
                        }}
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
                      className={active2 === i ? "active" : "desactive"}
                      key={i}
                      onClick={() => {
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                        setShowSeniority(true);
                        setActive2(i);
                        setActive3(-1);
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
                        className={active3 === i ? "active" : "desactive"}
                        key={i}
                        onClick={() => {
                          setFilter({ ...filter, level3: elem.value });
                          setActive3(i);
                        }}
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
                      className={active2 === i ? "active" : "desactive"}
                      key={i}
                      onClick={() => {
                        setShowField(true);
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                        setActive2(i);
                        setActive3(-1);
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
                        className={active3 === i ? "active" : "desactive"}
                        key={i}
                        onClick={() => {
                          setFilter({ ...filter, level3: elem.value });
                          setActive3(i);
                        }}
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
                      className={active2 === i ? "active" : "desactive"}
                      key={i}
                      onClick={() => {
                        setShowIndustry(true);
                        setFilter({
                          ...filter,
                          level2: el.value,
                        });
                        setActive2(i);
                        setActive3(-1);
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
                        className={active3 === i ? "active" : "desactive"}
                        key={i}
                        onClick={() => {
                          setFilter({ ...filter, level3: elem.value });
                          setActive3(i);
                        }}
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
