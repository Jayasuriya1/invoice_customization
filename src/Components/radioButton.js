import React, { useState } from "react";

export default function RadioButton({
  data,
  groupName,
  defaultSelected,
  onChange,
}) {
  const [selectedValue, setSelectedValue] = useState(defaultSelected);

  const handleChange = (e) => {
    if (e.target.value !== "Other") {
      const newValue = e.target.value;
      setSelectedValue(newValue);
      onChange(groupName, newValue);
    } else {
      const newValue = e.target.value;
      setSelectedValue(newValue);
    }
  };
  const handleChangeOther = (value) => {
    onChange(groupName, value);
  };

  return (
    <div className="d-flex flex-column">
      {data.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={groupName}
            value={item.value}
            checked={selectedValue === item.value}
            onChange={handleChange}
          />
          {item.label}{" "}{index==0?"(Default)":""}
          {item.value == "Other" ? (
            <input
              type="text"
              disabled={selectedValue !== "Other"}
              onChange={(e) => {
                handleChangeOther(e.target.value);
              }}
            ></input>
          ) : (
            ""
          )}
        </label>
      ))}
    </div>
  );
}
