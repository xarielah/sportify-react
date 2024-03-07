import { useNavigate } from "react-router-dom";
import Button from "../../button/button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/login")}>התחברות באמצעות גוגל</Button>
  );
}
