import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";


function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
           
              <Link to="/"> All Meetups</Link>
              <Link to="/newmeetup">                 Add NewMeetup</Link>
              <Link to="/favorites"> My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}</span></Link>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;