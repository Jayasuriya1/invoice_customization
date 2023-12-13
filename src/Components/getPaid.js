import React, { useState } from "react";
import BaseApp from "../BaseApp/baseApp";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RadioButton from "./radioButton";

export default function GetPaid() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const [isChecked, setIsChecked] = useState([false, false, false, false]);
  const [visibleColumnError, setVisibleColumnError] = useState(false);

  // Table Title Data
  const [columnTitleData, setColumnTitleData] = useState([
    { title: "Items", subCategory: "Items", visible: true },
    { title: "Units", subCategory: "Units", visible: true },
    { title: "Price", subCategory: "Price", visible: true },
    { title: "Amount", subCategory: "Amount", visible: true },
  ]);

  // Table Data
  const [tableData, setTableData] = useState([
    { Items: "Mobile-1", Units: "2", Price: "132.00", Amount: "264.00" },
    { Items: "Mobile-2", Units: "1", Price: "200.00", Amount: "200.00" },
  ]);

  // Table Hiding Data
  const [tableDataVisible, setTableDataVisible] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Column Title updating State
  const [itemsColumnValue, setItemsColumnValue] = useState("Items");
  const [unitsColumnValue, setUnitsColumnValue] = useState("Units");
  const [priceColumnValue, setPriceColumnValue] = useState("Price");
  const [amountColumnValue, setAmountColumnValue] = useState("Amount");

  // Visibility Updating Sfunction
  const handleChange3 = (index) => {
    if (index == 0) {
      setIsChecked([!isChecked[0], isChecked[1], isChecked[2], isChecked[3]]);
    } else if (index == 1) {
      setIsChecked([isChecked[0], !isChecked[1], isChecked[2], isChecked[3]]);
    } else if (index == 2) {
      setIsChecked([isChecked[0], isChecked[1], !isChecked[2], isChecked[3]]);
    } else {
      setIsChecked([isChecked[0], isChecked[1], isChecked[2], !isChecked[3]]);
    }
  };

  // column Title data
  const objectDataItemsGroup = [
    { value: "Items", label: "Items" },
    { value: "Products", label: "Products" },
    { value: "Service", label: "Service" },
    { value: "Other", label: "Other" },
  ];

  const objectDataUnitsGroup = [
    { value: "Quantity", label: "Quantity" },
    { value: "Hours", label: "Hours" },
    { value: "Other", label: "Other" },
  ];
  const objectDataPriceGroup = [
    { value: "Price", label: "Price" },
    { value: "Rate", label: "Rate" },
    { value: "Other", label: "Other" },
  ];

  const objectDataAmountGroup = [
    { value: "Amount", label: "Amount" },
    { value: "Other", label: "Other" },
  ];

  
  const columnVisibleData = [
    {
      label: "Hide item",
      value: "Items",
    },
    {
      label: "Hide units",
      value: "Units",
    },
    {
      label: "Hide price",
      value: "Price",
    },
    {
      label: "Hide amount",
      value: "Amount",
    },
  ];

  // Default selected values for each group
  const defaultSelectedItemsGroup = "Items";
  const defaultSelectedUnitsGroup = "Quantity";
  const defaultSelectedPriceGroup = "Price";
  const defaultSelectedAmountGroup = "Amount";

  // Handle radio button change
  const handleChange = (groupName, selectedValue) => {
    if (groupName == "Items") {
      setItemsColumnValue(selectedValue);
    } else if (groupName == "Units") {
      setUnitsColumnValue(selectedValue);
    } else if (groupName == "Price") {
      setPriceColumnValue(selectedValue);
    } else if (groupName == "Amount") {
      setAmountColumnValue(selectedValue);
    }
  };

  const finalUpdate = () => {
    if (!isChecked.includes(false)) {
      setVisibleColumnError(true);
    } else {
      setVisibleColumnError(false);
      const data = columnTitleData;
      columnTitleData[0].title = itemsColumnValue;
      columnTitleData[0].visible = !isChecked[0];

      columnTitleData[1].title = unitsColumnValue;
      columnTitleData[1].visible = !isChecked[1];

      columnTitleData[2].title = priceColumnValue;
      columnTitleData[2].visible = !isChecked[2];

      columnTitleData[3].title = amountColumnValue;
      columnTitleData[3].visible = !isChecked[3];

      // Setting Default Value
      setTableDataVisible(isChecked);
      setItemsColumnValue("Items");
      setUnitsColumnValue("Quantity");
      setPriceColumnValue("Price");
      setAmountColumnValue("Amount");
      setIsChecked([false, false, false, false]);
      handleClose();
    }
  };
  return (
    <BaseApp btn={true} btnName={"Display"} btnClick={handleShow}>
      {/* Table */}
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Id</th>
            {columnTitleData.map((data, index) => {
              if (data.visible == true) {
                return <th key={index}>{data.title}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                {tableDataVisible[0] ? "" : <td>{data.Items}</td>}
                {tableDataVisible[1] ? "" : <td>{data.Units}</td>}
                {tableDataVisible[2] ? "" : <td>{data.Price}</td>}
                {tableDataVisible[3] ? "" : <td>{data.Amount}</td>}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* Popup box */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Customization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Column Title</h5>
            <p>Edit the column titles of the columns on this Invoice</p>
            <div className="custom-title">
              <div className="custom-title-div1">Items</div>
              <RadioButton
                data={objectDataItemsGroup}
                groupName="Items"
                defaultSelected={defaultSelectedItemsGroup}
                onChange={handleChange}
              />
            </div>

            <div className="custom-title">
              <div className="custom-title-div1">Units</div>
              <RadioButton
                data={objectDataUnitsGroup}
                groupName="Units"
                defaultSelected={defaultSelectedUnitsGroup}
                onChange={handleChange}
              />
            </div>
            <div className="custom-title">
              <div className="custom-title-div1">Price</div>
              <RadioButton
                data={objectDataPriceGroup}
                groupName="Price"
                defaultSelected={defaultSelectedPriceGroup}
                onChange={handleChange}
              />
            </div>
            <div className="custom-title">
              <div className="custom-title-div1">Amount</div>
              <RadioButton
                data={objectDataAmountGroup}
                groupName="Amount"
                defaultSelected={defaultSelectedAmountGroup}
                onChange={handleChange}
              />
            </div>

            <h5>Visible Column</h5>
            <p>Column which columns are visible on your Invoice</p>
            {visibleColumnError ? (
              <p style={{ color: "crimson", fontSize: "12px" }}>
                Your invoice must show at least one of the below.
              </p>
            ) : (
              ""
            )}
            {columnVisibleData.map((data, index) => {
              return (
                <label className="d-block" key={index}>
                  <input
                    type="checkbox"
                    id={data.label}
                    name={data.label}
                    checked={isChecked[index]}
                    onChange={(e) => handleChange3(index)}
                    value={data.value}
                  ></input>{" "}
                  {data.label}
                </label>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={finalUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </BaseApp>
  );
}
