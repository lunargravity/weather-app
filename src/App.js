import Header from './components/Header';
import Toggle from './components/Toggle';

export default function App() {
  return (
    <div>
      <Header />
      <Toggle left='°F' right='°C' />
    </div>
  );
}
