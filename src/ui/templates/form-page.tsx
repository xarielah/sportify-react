export default function FormPage({ title, description, children }: IFormPage) {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold text-slate-900">{title}</h1>
      {description ? <p>{description}</p> : ""}
      <hr className="my-6" />
      <>{children}</>
    </section>
  );
}

interface IFormPage {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  description?: string;
}
