import React from "react";

export default function CreateExpensePage(props) {
  return (
    <div>
      <section></section>
      <section>
        <h1>Update your budget</h1>
      </section>
      <section>
        <section>
          <form className="" onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset name="budget-form">
              <legend>Add a New Expense:</legend>
              <div className="input-form-group">
                <label htmlFor="name"> </label>
                <br />
                Name:{" "}
                <input
                  type="text"
                  className="input__control"
                  name="total-income"
                  id="total-income"
                  placeholder="Another expense"
                  onChange={(e) => this.updateIncome(e.target.value)}
                />
                Amount:{" "}
                <input
                  type="number"
                  className="input__control"
                  name="total-income"
                  id="total-income"
                  placeholder="$4000"
                  onChange={(e) => this.updateIncome(e.target.value)}
                />
                <label htmlFor="expense-category">Category:</label>
                <select id="expense-category">
                  <option value="recurring">Recurring</option>
                  <option value="savings">Savings</option>
                  <option value="discretionary">Discretionary</option>
                </select>
              </div>
              <p>
                Donec malesuada a mi at posuere. Vestibulum viverra tristique
                blandit. Nulla vulputate lorem sed libero tempor suscipit.{" "}
                <br />
                Nam eu dui arcu. Nulla quam tortor, dignissim quis laoreet eget,
                dignissim blandit ipsum. <br />
                Aenean et felis nec arcu aliquam blandit eget vitae enim. Proin
                efficitur aliquet consequat. <br />
                Quisque et velit aliquam libero pretium tincidunt eget eget est.
              </p>
              <button className="add-expense-button">Add Expense</button>
            </fieldset>
          </form>
        </section>
      </section>
      <section></section>
    </div>
  );
}
