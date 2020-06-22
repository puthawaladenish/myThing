import React, { Component } from 'react';
import IndexNav from '../IndexComponent/IndexNav';
import About from '../components/StatiComponent/About'
import IndexFooter from '../IndexComponent/IndexFooter';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <IndexNav />
                <About/>
                <IndexFooter />
            </div>
        );
    }
}
export default AboutPage;