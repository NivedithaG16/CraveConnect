const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="https://www.freepik.com/free-vector/food-shopping-logo-template-design_23254587.htm" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
