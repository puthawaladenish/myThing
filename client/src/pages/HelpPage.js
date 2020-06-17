import React from 'react';
import IndexNav from '../components/IndexComponent/IndexNav';
import Help from '../components/StatiComponent/Help';
import IndexFooter from '../components/IndexComponent/IndexFooter';


export default class HelpPage extends Component {
    render() {
        return (
            <div>
            <IndexNav/>
            <Help/>
            <IndexFooter/>    
            </div>
        )
    }
}

export default HelpPage;