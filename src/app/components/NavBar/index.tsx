import { NavLink } from "react-router-dom";
import { List, ListItem } from "./styles";

export function NavBar() {
  return (
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/editores">Editores</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/posts/criar">Novo post</NavLink>
      </ListItem>
    </List>
  );
}
