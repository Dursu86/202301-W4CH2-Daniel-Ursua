import "./personal.scss";

export function Personal() {
  return (
    <form className="personalData">
      <label className="question">
        Name
        <input type="text" name="" required />
      </label>
      <label className="question">
        Lastname
        <input type="text" name="" required />
      </label>
      <label className="question">
        BirthDate
        <input type="date" name="" required />
      </label>
      Gender
      <div>
        <label htmlFor="Male">
          <input type="radio" id="Male" name="gender" />
          Male
        </label>
      </div>
      <div>
        <input type="radio" id="female" name="gender" />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input type="radio" id="Other" name="gender" checked />
        <label htmlFor="Other">Other/prefer not to mention</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="newsletter">
          Check if you want to subscribe to our newsletter
        </label>
        <button className="pageButton">Next page</button>
      </div>
    </form>
  );
}
