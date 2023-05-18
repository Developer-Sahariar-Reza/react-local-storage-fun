import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Movie from "./components/Movie/Movie";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchNow = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div>
      <h1 className="title">Movie Hoster</h1>
      <div className="container">
        <div className="movie-container">
          <Movie handleWatchNow={handleWatchNow}></Movie>
        </div>
        <div className="cart-container">
          <Cart watchTime={watchTime}></Cart>
        </div>
      </div>
      {/* react toastify  */}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
