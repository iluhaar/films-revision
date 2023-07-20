import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../store/actions/authAction";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkAuth(email));
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          name="email"
          placeholder="Email.."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button>Login</button>
      </form>
    </>
  );
};

export default LoginComponent;
