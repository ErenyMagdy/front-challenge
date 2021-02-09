import React from 'react';
import { Media } from 'reactstrap';
const RenderReposritory = (props) => {
    return (    
        <React.Fragment>
            <h2 className="text-center text-primary mt-4 mb-4" >
                Hier you will find latest repositories that is submited 30 days ago
            </h2>
            { props.repositories.map(rep =>
                <div key={rep.id} className='row mt-5'>
                    <div className="col-2">
                        <Media>
                            <Media object width="100%" 
                                src={rep.owner.avatar_url} 
                                alt={rep.owner.login} 
                                title={rep.owner.login}
                            />
                        </Media>
                    </div>
                    <div className="col-10">
                        <Media body>
                            <Media heading>Repository name :{rep.name}</Media>
                            <h5 className="mt-4"> 
                                <i>Repository description : {rep.description} </i> 
                            </h5>
                            <div className="row mt-4">
                                <div className="col-sm-3 "> 
                                    < strong> Number of stars : {rep.stargazers_count}</ strong>
                                </div>
                                <div className="col-md-3 ">    
                                    <strong >Number of issues : {rep.open_issues_count}</strong>
                                </div>    
                                <div className="col-md-6 ">   
                                    <strong>Submited 30 days ago by {rep.owner.login}</strong>
                                </div>
                            </div>
                            <div className="row mt-3 ">
                                <div className="col-sm-3 ml-4">
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </Media>
                    </div> 
                </div>
            )}
        </React.Fragment>
    );
}
export default RenderReposritory;