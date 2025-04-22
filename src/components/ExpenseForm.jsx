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
    <div className="container my-5">
      <h2 className="text-center mb-4">Add New Expense</h2>
      <form
        className="rounded-lg p-4 shadow-lg bg-light"
        onSubmit={handleSubmit((formData) => {
          addExpense(formData);
          reset();
        })}
      >
        <div className="mb-4">
          <label
            htmlFor="description"
            className="form-label fw-bold text-muted"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            {...register("description", { minLength: 8, required: true })}
            placeholder="Enter description"
          />
          {errors.description?.type === "required" && (
            <div className="invalid-feedback">Description is required.</div>
          )}
          {errors.description?.type === "minLength" && (
            <div className="invalid-feedback">
              Description should be at least 8 characters.
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="form-label fw-bold text-muted">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className={`form-control ${errors.amount ? "is-invalid" : ""}`}
            {...register("amount", { required: true })}
            placeholder="Enter amount"
          />
          {errors.amount?.type === "required" && (
            <div className="invalid-feedback">Amount is required.</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="form-label fw-bold text-muted">
            Category
          </label>
          <select
            className={`form-select ${errors.category ? "is-invalid" : ""}`}
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Groceries">Groceries</option>
          </select>
          {errors.category?.type === "required" && (
            <div className="invalid-feedback">Category is required.</div>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3 shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
