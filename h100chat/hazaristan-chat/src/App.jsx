import { useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("ثبت نام موفق");
      setUser(data.user);
    }
  };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("ورود موفق");
      setUser(data.user);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hazaristan Chat 🔥</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Login</button>

      {user && (
        <div>
          <h3>کاربر لاگین شد ✅</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
