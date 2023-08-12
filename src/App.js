import "./App.css";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import SideNavbar from "./components/SideNavbar";

const sideNavArr = [
  { label: "Home", href: "#", isActive: true },
  { label: "Users", href: "#", isActive: false },
  { label: "Profile", href: "#", isActive: false },
  { label: "About", href: "#", isActive: false },
];



function App() {

  const [userData, setUserData] = useState({});

  const userInfo = {
    name: "John",
    age: 20,
    address: { state: "UP", city: 'Lucknow' },
  };
  useEffect(() => {
    setUserData(userInfo);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="buttonWrapper">
          <div style={{ display: "flex" }}>
            <h1 style={{ fontSize: 18 }}>
              Hey ! I am
              <span style={{ color: "black" }}> {userData?.name}</span> from
              {userData?.address?.city}, {userData?.address?.state}
            </h1>
          </div>
          <button className="button">Register</button>
          <button className="button">Login</button>
        </div>
      </header>
      <main className="mainContent">
        <SideNavbar sideNavArr={sideNavArr} />

        <div className="section">
          <section>
            <div className="formContainer">
              <div className="formWrapper">
                <div className="formCard">
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#302d2d",
                      fontSize: 23,
                    }}
                  >
                    Add/Edit Products
                  </h1>
                  <Form />
                </div>
              </div>
            </div>
          </section>
          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
