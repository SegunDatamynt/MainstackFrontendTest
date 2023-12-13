import Navbar from "./components/Navbar.tsx";
import Section1  from "./components/Section1.tsx";
import TransactionDetails from "./components/Transactions.tsx";
export default function App() {
    return (
        <>
            <Navbar/>
            <Section1/>
            <TransactionDetails/>
        </>
    )
}