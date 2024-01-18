// import { useState } from "react";
// import appFirebase from "../../credentials";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth(appFirebase);

const LoginForm = () => {
  // const [user, setUser] = useState({ userInfo: null, userType: "" });

  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="passwordd" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
