//1) Tener la variable react en scope
import React from "react"

//2) Tener la variable reactDOM en scope
//import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./estilos.scss"


const root = ReactDOM.createRoot(document.getElementById("root"))

//3) Tener la variable App(la aplicacion entera) en scope


//4) Hacer render de la App en el DOM
//ReactDOM.render(<App/>,document.getElementById("root"))
root.render(<App/>)

