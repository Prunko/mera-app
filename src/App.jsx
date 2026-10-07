import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'

export default function App() {
    return (
        <>
            <Header title="Майстерня" />
            <main>
                <HomePage />
            </main>
            <Footer year={2026} />
        </>
    )
}
