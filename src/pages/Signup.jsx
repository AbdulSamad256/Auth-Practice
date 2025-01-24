import { Input, Button, Card, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

function Signin() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user?.isLogin) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="p-6 w-full max-w-md shadow-md">
        <h3 className="text-center text-lg font-semibold mb-4">Sign Up</h3>
        <form className="flex flex-col">
          <Input
            isRequired
            type="text"
            size="lg"
            label="Username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="my-3"
          />
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
          <Button color="primary" size="lg" className="my-3">
            Sign Up
          </Button>
          <Spacer y={1} />
          <p className="text-center my-2">Or</p>
          <Spacer y={1} />
          <Button color="gradient" size="lg" className="my-3">
            Sign Up With Google
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Signin;
