import "./access.scss";
export function Access() {
  return (
    <form className="access">
      <label>
        Username
        <input type="text" required />
      </label>
      <label>
        Password
        <input type="Password" required />
      </label>
      <label>
        Repeat password
        <input type="Password" required />
        <input type="submit" />
      </label>
      Select your account type:
      <select name="select" className="select">
        <option value="value1" selected>
          Personal
        </option>
        <option value="value2">Pro</option>
        <option value="value3">Business</option>
      </select>
    </form>
  );
}
