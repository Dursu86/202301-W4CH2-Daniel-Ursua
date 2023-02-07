import { Access } from "../../features/acces.data/access";
import { Personal } from "../../features/personal.data/personal";
import "./main.scss";
export function Main() {
  return (
    <main className="main">
      <Personal />
      <Access />
    </main>
  );
}
