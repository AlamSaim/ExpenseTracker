import React from "react";

const ExpenseList = ({ items, deleteItem }) => {
  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, id) => (
            <tr key={id}>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td>
              <h3>Total</h3>
            </td>
            <td>
              <h3>
                $
                {items
                  .reduce((total, item) => total + parseInt(item.amount), 0)
                  .toFixed(2)}
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
