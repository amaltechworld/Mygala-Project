// import Nav from "./components/navbar/Nav";
import {
    Navbar,
    Hero,
    Card,
    ExclusiveVendors,
    CustomerComment,
    Testimonial,
    HorizontalScrollGallery,
    DashboardStats,
    Newsletter,
    Footer,
} from "./section";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
    return (
        <main className="relative">
            <section>
                <ErrorBoundary>
                    <Navbar />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Hero />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Card />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <ExclusiveVendors />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <CustomerComment />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Testimonial />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <HorizontalScrollGallery />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <DashboardStats />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Newsletter />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </section>
        </main>
    );
}


