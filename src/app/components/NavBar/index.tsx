import { NavLink } from "react-router-dom";
import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { List, ListItem } from "./styles";

export function NavBar() {
  usePageTitle("Lista de editores");

  return (
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/editores">Editores</NavLink>
      </ListItem>
    </List>
  );
}
