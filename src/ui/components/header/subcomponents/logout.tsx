import { useNavigate } from "react-router-dom";
import Button from "@/ui/components/button/button";

export default function Logout({ name }: { name: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-3">
      <span className="hidden md:inline">שלום, {name}</span>
      <Button className="bg-[#210e0f]" onClick={() => navigate("/logout")}>
        התנתקות
      </Button>
    </div>
  );
}
