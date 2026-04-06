
import AppProvider from "./context/AppContext";
import Home from "./homo/Home";

function App() {
  return (
    <>
      <AppProvider>
          <Home/>
      </AppProvider>
    </>
  );
}

export default App;
