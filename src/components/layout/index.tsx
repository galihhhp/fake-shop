import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner";

type Props = {
  children: JSX.Element[],
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Navbar />
      <main className="mb-10">{children}</main>
      <footer className="bg-black text-white py-12">
        <div className="container">
          asfsfffffffffffffff
        </div>
      </footer>
    </div>
  )
}

export default Layout;