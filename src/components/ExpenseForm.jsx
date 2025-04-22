import React from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        action=""
        className="mb-5"
        onSubmit={handleSubmit((formData) => {
          addExpense(formData);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register("description", { minLength: 8, required: true })}
          />
          {errors.description?.type == "required" && (
            <p style={{ color: "red" }}>This feild is required</p>
          )}
          {errors.description?.type == "minLength" && (
            <p style={{ color: "red" }}>
              This feild require at least 8 characters
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="text"
            className="form-control"
            {...register("amount", { required: true })}
          />
          {errors.amount?.type == "required" && (
            <p style={{ color: "red" }}>This feild is required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            name=""
            id=""
            className="form-select"
            {...register("category", { required: true })}
          >
            <option value=""></option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Groceries">Groceries</option>
          </select>
          {errors.category?.type == "required" && (
            <p style={{ color: "red" }}>This feild is required</p>
          )}
        </div>

        <div>
          <button className="btn btn-primary ">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
