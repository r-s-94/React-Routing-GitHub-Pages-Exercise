//import { useState } from "react";
import "./App.css";
import ExampleComponent from "./exampleComponent";
import ExampleComponent2 from "./exampleComponent2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExampleComponent />,
    },
    {
      path: "example2",
      element: <ExampleComponent2 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
