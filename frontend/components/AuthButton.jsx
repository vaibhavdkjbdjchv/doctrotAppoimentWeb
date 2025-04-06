import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex justify-between items-center ">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="font-normal font-sans font-medium text-white px-5 text-sm py-2 rounded-4xl bg-blue-600  cursor-pointer loginButton"
        >
          Create Account
        </button>
      ) : (
        <div className="flex justify-center items-center  w-auto gap-3">
          <img src={user.picture} className=" rounded-full w-10" />
          <h2 className="font-bold text-lg text-white">{user.name}</h2>
          <button
            className="font-semibold w-30 py-2 text-sm text-white rounded-lg px-5 cursor-pointer loginButton"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
