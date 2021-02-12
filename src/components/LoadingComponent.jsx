import React from 'react';
const Loading = () => {
    return (
        <>
            <div className="container m-5 text-center">
                <br/>
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-success"></span>
                <br/><br/>
                <div>loading...</div>
            </div> 
        </>
        
    );
}
 
export default Loading;