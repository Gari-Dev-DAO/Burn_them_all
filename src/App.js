import { WalletConnectProvider } from './Components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Home from './Pages/Home';
import './App.css';
import NavBar from './Components/NavBar';
import HomeState from './States/HomeState';
import PayMe from './Components/PayMe';


function App() {
  return (
   <>
  <WalletConnectProvider>
    <NavBar/> 
     <HomeState>
     <Home/>
    </HomeState>
     {/* <PayMe/> */}
    
  </WalletConnectProvider>
   </>
  );
}

export default App;
