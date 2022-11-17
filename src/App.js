import logo from "./logo.svg";
import "./App.css";
import {
  Helloworld,
  HelloworldObj,
  HelloworldArr,
  ArrOfObj,
  ComplexArr,
  ApiResult,
} from "./components/helloworld";
import SecondApi from "./components/SecondApi";

function App() {
  return (
    <div className="App">
      <Helloworld />
      <hr />
      <HelloworldObj />
      <hr />
      <HelloworldArr />
      <hr />
      <ArrOfObj />
      <hr />
      <ComplexArr />
      <hr />
      <ApiResult />
      <hr />
      <SecondApi />
    </div>
  );
}

export default App;
