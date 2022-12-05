import "./App.css";

function App() {
  return (
    <div>
      <div className="fixed w-full">
        <div className="flex flex-row justify-center items-center  max-w-screen-xl ">
          <div className="flex flex-row ">
            <img
              src="	https://demo.themesberg.com/landwind/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            ></img>
            <div>
              <p>LandWind</p>
            </div>
          </div>
          <div className="w-full ">
            <ul className="">
              <li>Home </li>
              <li>Company </li>
              <li>Marketplace </li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button>Download</button>
          </div>
        </div>
      </div>
      <div>hihi</div>
    </div>
  );
}

export default App;
