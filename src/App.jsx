import Header from "./components/Header";

import { userInfo, projects, social } from "./components/data";

function App() {
  return (
    <>
      <Header name={userInfo[0].name} />
    </>
  );
}

export default App;
