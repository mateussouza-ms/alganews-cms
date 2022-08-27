import { NavLink } from "react-router-dom";
import { List, ListItem } from "./styles";

export function NavBar() {
  return (
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/usuario">Usuário</NavLink>
      </ListItem>
    </List>
  );
}
