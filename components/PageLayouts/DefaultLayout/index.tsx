import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
