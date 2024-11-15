import "./App.css";
import Child0 from "./components/Child0.jsx";
import Child1 from "./components/Child1.jsx";
import Child3 from "./components/Child3.jsx";
import Child2 from "./components/Child2.jsx";
import Child4 from "./components/Child4.jsx";
import Parentprop from "./components/parentprop.jsx";
import List from "./components/List.jsx";

function App() {
  const user = {
    name: "AJ",
    Id: 27,
    hobbies: ["Reading", "Traveling"],
    isMember: true,
  };

  return (
    <div>
      {/* <Child0
        name="ABES Engineering College"
        year={["1st", "2nd", "3rd"]}
        date={new Date()}
      /> */}
      {/* <Child1 name="AKTU,Lucknow" /> */}
      {/* <Child2 user={user} /> */}
      {/* <Child3 name={123} college="ABESEC" /> */}
      {/* <Child3 name="Ashish" college="ABESEC" /> */}
      {/* <Child4 {...user} /> */}
      {/* <Parentprop /> */}

      {/* <List /> */}
    </div>
  );
}

export default App;
