import { useNavigate } from "react-router-dom";
import Button from "../button/button";

const shortcuts = [
  {
    title: "הוספת אימון אירובי 🏃‍♀",
    href: "/do/add-run",
  },
  {
    title: "הוספת אימון 🏋️‍♂️",
    href: "/do/add-workout",
  },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[300px] flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-slate-800 text-5xl">
        מה בא לך להזין היום?
      </h1>
      <div className="flex flex-wrap gap-3">
        {shortcuts.map((shortcut) => (
          <Button
            className="rounded-full text-lg bg-slate-800 text-white px-6 py-1"
            onClick={() => navigate(shortcut.href)}
            key={shortcut.href}
          >
            {shortcut.title}
          </Button>
        ))}
      </div>
    </section>
  );
}
