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
      <label className="question">
        Gender
        <div>
          <input type="radio" />
          <label htmlFor="Male">Male</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="Female">Female</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="Other/prefer not to mention">
            Other/prefer not to mention
          </label>
        </div>
      </label>
      <div>
        <input type="checkbox" />
        <label htmlFor="newsletter">
          Check if you want to subscribe to our newsletter
        </label>
      </div>
    </form>
  );
}
