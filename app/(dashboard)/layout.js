import { Poppins } from "next/font/google";
import "../globalsSignup.css";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/shared/navigation/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex">
          <Sidebar />
          <div className="grow basis-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
