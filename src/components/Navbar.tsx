import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      {!user ? (
        <Link to="/login" className="link">
          Login
        </Link>
      ) : (
        <Link to="/createpost" className="link">
          Create Post
        </Link>
      )}

      {user && (
        <div className="navbar-credentials">
          <>
            <img src={user?.photoURL || ""} alt="Profile" width="40" height="40" />
            <p>{user?.displayName}</p>
            <button onClick={signUserOut}>Log Out</button>
          </>
        </div>
      )}
    </div>
  );
};
