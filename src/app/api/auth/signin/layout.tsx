export default async function siginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-200 h-screen flex justify-center items-center flex-col">
      {children}
    </main>
  );
}
