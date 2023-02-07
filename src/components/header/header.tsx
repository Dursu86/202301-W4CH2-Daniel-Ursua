import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Company logo" width="200px" />
      </div>
      <h1 className="header__title">Academy questionnaire</h1>
    </header>
  );
}
