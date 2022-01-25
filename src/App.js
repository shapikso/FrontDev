import React from 'react';
import './App.css';
import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';
import BigImg from './components/BigImg/BigImg';
import axios from "axios";
import Loader from "./components/Loader/Loader";
// import NoData from "./components/Nodata/Nodata";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allImages: [],
            images:[],
            isLoading: true,
            activePage: 1,
            bigImg: '',
        };
    }

    componentDidMount() {
        this.getGalleryData();
    }

    getGalleryData = async() => {
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
            this.setState({
                allImages : data,
                images: data.slice(0,20),
                isLoading: false
            }) ;
        } catch (error){
            return false;
        }
    }

    setActivePage = (page) => {
        this.setState({activePage: page});
        this.setState({images: this.state.allImages.slice((page-1)*20,page*20)});
    }

    showBigImg = (img) => this.setState({bigImg: img})
    hiddeBigImg = () => this.setState({bigImg: ''})

    render() {
        return (
            <div className="form">
                {this.state.bigImg && <BigImg bigImg={this.state.bigImg} hiddeBigImg={this.hiddeBigImg} />}
                {this.state.isLoading ? <Loader/> : <List galery={this.state.images} showBigImg={this.showBigImg} />}
                <Pagination setActivePage={this.setActivePage} activePage={this.state.activePage}/>

            </div>
        );
    }
}

export default App;
