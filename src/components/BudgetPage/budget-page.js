import React from "react";

export default function BudgetPage(props) {
  return (
    <div className="budget-page">
      <header className="banner">
        <h1>Your Budget</h1>
        <section>
          <h2>just imagine.</h2>
        </section>
      </header>

      <section>
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="budget-form">
            <legend>An overview of your budget</legend>
            <div className="input-form-group">
              <label htmlFor="name">Total Monthly Income:</label>
              <input
                type="number"
                className="input__control"
                name="total-income"
                id="total-income"
                placeholder="$4,000"
                onChange={(e) => this.updateIncome(e.target.value)}
              />
            </div>
          </fieldset>
        </form>
      </section>

      <section>
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="expense-form">
            <legend>
              Recurring Expenses
              <br />
              30% of your income
            </legend>

            <label htmlFor="rent-expense-input">Rent/Mortgage:</label>
            <input
              type="number"
              className="input__control"
              name="rent-expense"
              id="rent-expense"
              placeholder="$1,200"
              onChange={(e) => this.updateRent(e.target.value)}
            />
            <br />
            <label htmlFor="electric-expense-input">Electricity:</label>
            <input
              type="number"
              className="input__control"
              name="electric-expense"
              id="electric-expense"
              placeholder="$50"
              onChange={(e) => this.updateElectric(e.target.value)}
            />
            <br />
            <label htmlFor="gas-expense-input">Gas:</label>
            <input
              type="number"
              className="input__control"
              name="gas-expense"
              id="gas-expense"
              placeholder="$25"
              onChange={(e) => this.updateGas(e.target.value)}
            />
            <br />
            <label htmlFor="Phone-expense-input">Phone:</label>
            <input
              type="number"
              className="input__control"
              name="phone-expense"
              id="phone-expense"
              placeholder="$50"
              onChange={(e) => this.updatePhone(e.target.value)}
            />
            <br />
            <label htmlFor="internet-expense-input">Internet:</label>
            <input
              type="number"
              className="input__control"
              name="internet-expense"
              id="internet-expense"
              placeholder="$50"
              onChange={(e) => this.updateInternet(e.target.value)}
            />
            <br />
            <label htmlFor="water-expense-input">Water:</label>
            <input
              type="number"
              className="input__control"
              name="water-expense"
              id="water-expense"
              placeholder="$25"
              onChange={(e) => this.updateWater(e.target.value)}
            />
            <br />
          </fieldset>
        </form>
      </section>

      <section>
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="savings-form">
          <legend>
              Savings
              <br />
               at least 10% of your income
            </legend>
            <div className="input-form-group">
              <label htmlFor="name">Total Monthly Savings:</label>
              <input
                type="number"
                className="input__control"
                name="total-savings"
                id="total-savings"
                placeholder="$400"
                onChange={(e) => this.updateSavings(e.target.value)}
              />
            </div>
          </fieldset>
        </form>
      </section>

      <section></section>
    </div>
  );
}

{
  /* <section>
        <p> */
}
{
  /* <form className='budget-form'>
            <div>
              <label Htmlfor="first-name"><h5>Total Monthly Income:</label>
              <input placeholder='$4,000' type="number" name='monthly-income' id='monthly-income' /></h5>
            </div>
        </form>
        </p>
      </section>
      <section>
        <header>
            <h3>Recurring Expenses - 30% of your Income</h3>
        </header>
        <p><form class='expenses-form'>
            <div>
              <label for="recurring-expenses"><h5>Recurring Expenses:</label>
              <input placeholder='$1,200' type="number" name='recurring-expenses' id='recurring-expenses' /></h5>
            </div>
            <div>
              <label for="rent-expense"><h6>Rent/Mortgage:</label>
              <input placeholder='$1,000' type="number" name='rent-expense' id='rent-expense' /><br>
              <label for="electric-expense">Electricity:</label>
              <input placeholder='$50' type="number" name='electric-expense' id='electric-expense' /><br>
              <label for="gas-expense">Gas:</label>
              <input placeholder='$25' type="number" name='gas-expense' id='gas-expense' /><br>
              <label for="phone-expense">Phone:</label>
              <input placeholder='$50' type="number" name='phone-expense' id='phone-expense' /><br>
              <label for="internet-expense">Internet:</label>
              <input placeholder='$50' type="number" name='internet-expense' id='internet-expense' /><br>
              <label for="water-expense">Water:</label>
              <input placeholder='$25' type="number" name='water-expense' id='water-expense' />
              </h6>
            </div>
        </form></p>
      </section>
      <section>
        <header>
            <h3>Savings - 10% of your Income<br>*Pay yourself first*</h3>
        </header>
          <div>
              <label for="savings"><h5>Monthly Savings:</label>
              <input placeholder='$400' type="number" name='savings' id='savings' /></h5>
            </div>
      </section>
      <section>
        <header>
            <h3>Discretionary Income <br>what's left over a.k.a. The Fun Stuff</h3>
        </header>
        <p><form class='expenses-discretionary'>
            <div>
              <label for="discretionary-expenses"><h5>Discretionary Income:</label>
              <input placeholder='2,400' type="number" name='discretionary-expenses' id='discretionary-expenses' /></h5>
            </div>
            <div>
              <label for="transport-expense"><h6>Transportation:</label>
              <input placeholder='$500' type="number" name='transport-expense' id='transport-expense' /><br>
              <label for="food-expense">Food:</label>
              <input placeholder='$500' type="number" name='food-expense' id='food-expense' /><br>
              <label for="shopping-expense">Shopping:</label>
              <input placeholder='$500' type="number" name='shopping-expense' id='shopping-expense' /><br>
              <label for="travel-expense">Travel:</label>
              <input placeholder='$500' type="number" name='travel-expense' id='travel-expense' /><br>
              <label for="home-expense">Home:</label>
              <input placeholder='$250' type="number" name='home-expense' id='home-expense' /><br>
              <label for="other-expense">Other:</label>
              <input placeholder='$150' type="number" name='other-expense' id='other-expense' />
              </h6>
            </div>
        </form></p> */
}
{
  /* </section>   */
}
