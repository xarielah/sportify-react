export default function FieldsWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
