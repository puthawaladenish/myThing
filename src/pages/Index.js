import React from 'react';
import IndexNav from '../components/IndexComponent/IndexNav';
import IndexMain from '../components/IndexComponent/IndexMain';
import IndexFooter from '../components/IndexComponent/IndexFooter';


class IndexPage extends React.Component{
    render(){
        return(
            <div>
          <IndexNav/>
          <IndexMain/>
          <IndexFooter/>       
          </div>
        );
    }
}
 export default IndexPage;