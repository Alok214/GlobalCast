import "./App.css";
import Weather from "./component/Weather";

export default function App() {
   return (
      <div className="App">
         <Weather defaultCity="Mumbai" />
      </div>
   );
}
