import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/NavBar/Navbar';
import Midsect from './components/WeatherAndClock/W_and_Q';
import BottomContainer from './components/BottomSection/Links_Chess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <div> <Navbar /> </div>
    <div> <Midsect /></div>
    <div> <BottomContainer /> </div>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
