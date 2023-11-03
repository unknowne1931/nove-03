import React, { Component } from "react";
import axios from "axios";
import Login from "./login";


const Hoc = (Component) => {
    return(
        class extends React.Component{
            constructor(props) {
                super(props);
                this.state = {
                  data: [],
                };
            }

            componentDidMount() {
                // Make an API request here using axios or fetch.
                const reactkey = process.env.REACT_APP_API_KEY
                axios.get(`http://localhost:5000/valid?key=${reactkey}`)
                  .then((response) => {
                    this.setState({
                      data: response.data,
                    });
                  })
                  .catch((error) => {
                    console.error('Error fetching data:', error);
                    this.setState({ loading: false });
                  });
              }
            render(){
                return(
                    <div>
                        {this.state.data.email ? <Component /> : <div><center>
                            </center></div>}
                    </div>
                )
            }
        }
    )
}

export default Hoc