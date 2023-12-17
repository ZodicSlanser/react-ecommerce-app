import { BrowserRouter as Router, Switch, Route, Link, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={<BigSpinner />} />
    </div>
  );
};

export default App;
