import React, { Component } from 'react';
import IndexNav from '../IndexComponent/IndexNav';
import Terms from '../components/StatiComponent/Terms'
import IndexFooter from '../IndexComponent/IndexFooter';
import Terms from '../components/StatiComponent/Terms';

class TermPage extends React.Component {
    render() {
        return (
            <div>
                <IndexNav />
                <Terms/>
                <IndexFooter />
            </div>
        );
    }
}
export default TermPage;