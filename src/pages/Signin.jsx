import { Input, Button, Card, Spacer } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Signin() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isLogin) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User=>", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error("Sign-In Error:", err);
      alert("Sign-in failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="p-6 w-full max-w-md shadow-md">
      <h1 className="text-center">Email:Login@gmail.com</h1>
      <h1 className="text-center">Password:abc@12569</h1>
        <h3 className="text-center text-lg font-semibold mb-4">
          Welcome Back
        </h3>
        <form className="flex flex-col">
          <Input
            isRequired
            type="email"
            size="lg"
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="my-3"
          />
          <Input
            isRequired
            type="password"
            size="lg"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="my-3"
          />
          <Spacer y={1} />
          <Button
            onClick={handleSignIn}
            isLoading={loading}
            color="primary"
            size="lg"
            className="my-3"
          >
            Sign In
          </Button>
          <Spacer y={1} />
          <p className="text-center my-2">Or</p>
          <Spacer y={1} />
          <Button
            onClick={handleSignInWithGoogle}
            color="gradient"
            size="lg"
            className="my-3"
          >
            Sign In with Google
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Signin;
