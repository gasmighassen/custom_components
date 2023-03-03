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
  const [filtered, setFiltered] = useState({
    jobTitle: "",
    industry: "",
    field: "",
    LevelofExpertise: "",
    Speciality: "",
  });
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hideSub1, setHideSub1] = useState(true);

  const newData: { key: string; value: any }[] = [];
  console.log(keys);
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
  const speciality = unique.filter((f) => f.key === "Speciality");
  console.log(speciality);
  return (
    <>
      <div className="cascader" onClick={() => setShow(!show)}>
        <span>Select...</span>
      </div>
      {show && (
        <ul className="cascader-list">
          <li onClick={() => setHide(!hide)}>
            Assosiative
            <ul
              className={`sublist 
            ${hide ? "hide" : ""}`}
            >
              {unique
                .filter((f) => f.key === "jobTitle")
                .map((el: any) => (
                  <li onClick={() => setHideSub1(!hideSub1)}>
                    {el.value}
                    <ul>
                      {speciality.map((el) => (
                        <li>{el.value}</li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
          <li onClick={() => setHide1(!hide1)}>
            Seniority
            <ul
              className={`sublist 
            ${hide1 ? "hide" : ""}`}
            >
              {unique
                .filter((f) => f.key === "LevelofExpertise")
                .map((el: any) => (
                  <li>{el.value}</li>
                ))}
            </ul>
          </li>
          <li onClick={() => setHide2(!hide2)}>
            Field
            <ul
              className={`sublist 
            ${hide2 ? "hide" : ""}`}
            >
              {unique
                .filter((f) => f.key === "field")
                .map((el: any) => (
                  <li>{el.value}</li>
                ))}
            </ul>
          </li>
          <li onClick={() => setHide3(!hide3)}>
            Industry
            <ul
              className={`sublist 
            ${hide3 ? "hide" : ""}`}
            >
              {unique
                .filter((f) => f.key === "industry")
                .map((el: any) => (
                  <li>{el.value}</li>
                ))}
            </ul>
          </li>
        </ul>
      )}
    </>
  );
};

export default Cascader;
