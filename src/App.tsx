import 'styles/index.scss';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Articles from 'components/Articles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import About from 'components/About';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Hero />
        <Articles />
        <About />
        <Footer />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
