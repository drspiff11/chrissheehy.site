import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <html>
      <head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
      </head>

      <body className="app">
    
        <Header></Header>
      
      </body>
      <Footer></Footer>
    </html>
  );
}

export default App;
