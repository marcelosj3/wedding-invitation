type Props = {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: Props) => {
  return (
    <section className="flex flex-col p-2 bg-gray-200 rounded-md gap-1">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};
