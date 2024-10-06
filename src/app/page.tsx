// components
import Playground from '@/components/Playground/Playground';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main data-testid="main-content" className="pb-8">
      <Playground />
      <Footer />
    </main>
  );
}
