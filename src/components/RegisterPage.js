import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            memberId: '',
            password: '',
            name: '',
            gender: 0,
            bornYear: 1990,
            submitted: false
        };
    }

    
}