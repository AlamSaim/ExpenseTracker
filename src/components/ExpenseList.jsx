import React from "react";

const ExpenseList = ({ items, deleteItem }) => {
  return (
    <div
      className="table-container mb-5"
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <table
        className="table table-striped table-hover"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th
              scope="col"
              style={{
                padding: "12px 15px",
                textAlign: "left",
                backgroundColor: "#0d6efd",
                color: "white",
              }}
            >
              Description
            </th>
            <th
              scope="col"
              style={{
                padding: "12px 15px",
                textAlign: "left",
                backgroundColor: "#0d6efd",
                color: "white",
              }}
            >
              Amount
            </th>
            <th
              scope="col"
              style={{
                padding: "12px 15px",
                textAlign: "left",
                backgroundColor: "#0d6efd",
                color: "white",
              }}
            >
              Category
            </th>
            <th
              scope="col"
              style={{
                padding: "12px 15px",
                textAlign: "left",
                backgroundColor: "#0d6efd",
                color: "white",
              }}
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, id) => (
            <tr
              key={id}
              style={{
                transition: "background-color 0.3s",
              }}
            >
              <td
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                }}
              >
                {item.description}
              </td>
              <td
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                }}
              >
                ${item.amount}
              </td>
              <td
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                }}
              >
                {item.category}
              </td>
              <td
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                }}
              >
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="btn btn-danger btn-sm"
                  style={{
                    backgroundColor: "#e74c3c",
                    borderColor: "#e74c3c",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#c0392b";
                    e.target.style.borderColor = "#c0392b";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#e74c3c";
                    e.target.style.borderColor = "#e74c3c";
                  }}
                >
                  <i className="bi bi-trash" style={{ marginRight: "5px" }}></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr
            className="total-row"
            style={{
              fontWeight: "bold",
              backgroundColor: "#f8f9fa",
            }}
          >
            <td
              style={{
                padding: "12px 15px",
                textAlign: "left",
              }}
            >
              <h4>Total</h4>
            </td>
            <td
              style={{
                padding: "12px 15px",
                textAlign: "left",
              }}
            >
              <h4>
                $
                {items
                  .reduce((total, item) => total + parseFloat(item.amount), 0)
                  .toFixed(2)}
              </h4>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
