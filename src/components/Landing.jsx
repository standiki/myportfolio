import Header from "./Header";

import { userInfo, links } from "./data";

const Landing = () => {
  return (
    <div className="App">
      <Header name={userInfo[0].name} navLinks={links} />
    </div>
  );
};

export default Landing;
