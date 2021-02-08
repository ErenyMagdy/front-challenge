import './App.css';
import React, { Component } from 'react';
import {  Media } from 'reactstrap';
//import axios from 'axios';
function RenderReposritory(props) {
  return (
    <React.Fragment>
      <div className="container"> 
        { props.repositories.map(rep =>
          <div key={rep.id} className=' mt-5'>
            <Media list>
              <Media left key={rep.id} className="col-md-4">
                <Media object width="30%" 
                  src={rep.owner.avatar_url} 
                  alt={rep.owner.login} 
                  title={rep.owner.login} />
              </Media>
              <Media  tag='li'>
                <Media  body className='ml-5'>
                  <Media heading> Repository name :{rep.name}</Media>
                  <p className='mb-2'> Number of stars : {rep.stargazers_count}</p>
                  <p> Repository description : {rep.description}</p>
                  <p>Number of issues : {rep.open_issues_count}</p>
                  <p>Submited 30 days ago by {rep.owner.login}</p>
                </Media>
              </Media>
            </Media> 
          </div>
        )}           
      </div>
    </React.Fragment>
  );
}
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
        <div className="container m-5">
          <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
          <div>loading...</div>
        </div>
      );
    }
    else if (!this.state.repositories) {
      return <div>didn't get a repository</div>;
    }
    else if(this.state.repositories != null) {
      return (
        <RenderReposritory repositories = {this.state.repositories}/>
      );
    }
  }
}
export default App;