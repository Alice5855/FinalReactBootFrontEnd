import { Route } from "react-router-dom";
import Header from "./views/Commons/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Commons/Footer";
import CBoardComponent from "./views/CBoard/CBoardComponent";
import About from "./views/About";
import NBoardComponent from "./views/NBoard/NBoardComponent";
import QBoardComponent from "./views/QBoard/QBoardComponent";

const App = () => {
  

  return (
    <>
      <Header />
      <div id="spaceFiller" style={{height: '10vh'}}></div>
      <Route path = "/" component = {Main} exact={true} />
      {/* exact 속성을 state에 붙임. url이 정확히 '/'일 때만 Main component를 표시 */}
      <Route path = "/Community" component={CBoardComponent} />
      <Route path = "/Notice" component={NBoardComponent} />
      <Route path= "/QnA" component={QBoardComponent} />
      <Route path={'/About'} component={About} />
      <Footer />
    </>
  );
};
export default App;