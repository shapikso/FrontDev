import React from 'react';
import './App.css';
// import Form from './components/Form/Form';
import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';
import BigImg from './components/BigImg/BigImg';
import axios from "axios";
// import Loader from "./components/Loader/Loader";
// import NoData from "./components/Nodata/Nodata";
//import {URL} from "./constants/api";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoading: true,
            activePage: 1,
            bigImg: '',
        };
    }

    componentDidMount() {
        this.getGalleryData((this.state.activePage-1)*20,this.state.activePage*20);
    }

    getGalleryData = async(leftLimit, rigthLimit) => {
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
            this.setState({images : data.slice(leftLimit,rigthLimit)}) ;
        } catch (error){
            return false;
        }
    }
    setActivePage = (page) => {
        this.setState({activePage: page});
        this.getGalleryData((page-1)*20,page*20);
    }
    // changeChecked = async (id, status) => {
    //     try {
    //         await axios.put(URL.baseUrl+`/${id}`, {
    //             completed: !status
    //         });
    //     } finally {
    //         this.setState({
    //             todos: this.state.todos.map(el => el.id === id ? {...el, completed: !el.completed} : el)
    //         });
    //     }
    // }
    showBigImg = (img) => this.setState({bigImg: img})
    hiddeBigImg = () => this.setState({bigImg: ''})



    render() {
        return (
            <div className="form">
                {this.state.bigImg && <BigImg bigImg={this.state.bigImg} hiddeBigImg={this.hiddeBigImg} />}
                <List galery={this.state.images} showBigImg={this.showBigImg} />
                <Pagination setActivePage={this.setActivePage} activePage={this.state.activePage}/>
            </div>
        );
    }
}

export default App;
