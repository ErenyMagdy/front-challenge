import './App.css';
import React, { Component } from 'react';
//import axios from 'axios';
import RenderReposritory from './components/RenderRepository';
import Loading from './components/LoadingComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      repositories: [],
      loading: true
    };
  }
  async componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc')
    .then(result => result.json())
    .then(repositories => this.setState({repositories: repositories.items, loading: false }))
    //const {repositories}  = await axios.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc');
    //const repositories = await response.json();
    //this.setState({ repositories: repositories.items });
    //console.log(data.items[0].description);
  }
  render() {
    if (this.state.loading) {
      return (
        <Loading/>
      );
    }
    else if (!this.state.repositories) {
      return <div>didn't get a repository</div>;
    }
    else if(this.state.repositories != null) {
      return (
        <div className="container"> 
          <RenderReposritory repositories = {this.state.repositories}/>
        </div> 
      );
    }
  }
}
export default App;