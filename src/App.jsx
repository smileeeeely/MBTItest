import UserLoginProvider from "./provider/UserLoginProvider";
import Router from "./router/Router";

const App = () => {
  return (
    <UserLoginProvider>
      <Router />
    </UserLoginProvider>
  );
};

export default App;
