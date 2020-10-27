import React from "react";
import ReactDOM from "react-dom";
import Employee from './employee';


class HomePage extends React.Component{
    render(){
      return(
        <main className="body">
          <Employee/>
        </main>
      );
    }
}

export default HomePage;
