import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label>Text</label>
          <input type="text" placeholder="Enter Text.." />
        </div>
        <div>
          <label>
            Amount <br />
            (negative -expense, positive-income)
          </label>
          <input type="number" placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
