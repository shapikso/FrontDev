import React, {Component} from 'react';
import axios from "axios";
import './App.scss';
import Header from './components/Header/Header'
import Row from './components/Row/Row'
import { normoliseUser } from './helpers/helper'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true};
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = async() => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({
                users: normoliseUser(data),
                isLoading:false});
        } catch (error) {
            this.setState({ isLoading: false });
        }
    }
    render() {
        return (
            <div className="table">
                <div className="table-row-head">
                    <Header tableRowClass="table-row-two" itemClass="table-row-item" />
                </div>
                {
                    this.state.users.map((el, index) => <Row user={el} key={index} />)
                }
            </div>
        );
    }
}

export default App;

