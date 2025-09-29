import Header from "../Header";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main>
      <Header />
      <main className="pt-8">{children}</main>
    </main>
  );
}
