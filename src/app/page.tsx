// components
import Playground from '@/components/Playground/Playground';
import Footer from '@/components/Footer/Footer'; // comment this to hide footer

export default function Home() {
  return (
    <main data-testid="main-content">
      <Playground />
      <Footer />
    </main>
  );
}
