import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Footer";
import CBoardComponent from "./views/CBoardComponent";
import About from "./views/About";
import NBoardComponent from "./views/NBoardComponent";
import QBoardComponent from "./views/QBoardComponent";
import Find from "./views/Find";

const App = () => {
  

  return (
    <>
      <Header />
      <div id="spaceFiller" style={{height: '10vh'}}></div>
      {/* <Route path = "/" component = {Main} exact={true} /> */}
      <Route path="/" component={Find} />
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