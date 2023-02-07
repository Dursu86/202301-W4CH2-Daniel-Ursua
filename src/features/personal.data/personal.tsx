export function Personal() {
  return (
    <form>
      <label>
        Name
        <input type="text" name="" required />
      </label>
      <label>
        Lastname
        <input type="text" name="" required />
      </label>
      <label>
        BirthDate
        <input type="date" name="" required />
      </label>
      <label>
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
