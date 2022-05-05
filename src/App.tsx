import React, { useEffect, useRef } from "react";
import "./App.scss";
import "@/styles/_main.scss";
import Navigation from "@/components/navigation/Navigation";
import { Observable } from "rxjs";
import animateService from "./services/animate.service";

function App() {
  return (
    <div className="rx-app">
      <Navigation></Navigation>
    </div>
  );
}

export default App;
