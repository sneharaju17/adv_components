import AddTimer from './components/UI/AddTimer.tsx';
import Header from './components/UI/Header.tsx';
import Timers from './components/UI/Timers.tsx';
import TimersContextProvider from './store/timers-context.tsx';
function App() {
  return (
    <TimersContextProvider>
    <Header />
    <main>
      <AddTimer />
      <Timers />
    </main>
    </TimersContextProvider>
  );
}
export default App;
