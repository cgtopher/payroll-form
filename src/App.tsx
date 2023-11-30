import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Form} from "./Form";
import {DEFAULT_FORM, Forms} from "./forms/Forms";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Form jsonDefinition={DEFAULT_FORM}/>
        },
    ...Forms.map((form) =>
        ({
          path: form.slug,
          element: <Form jsonDefinition={form}/>
        })
    )
        ]
)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
