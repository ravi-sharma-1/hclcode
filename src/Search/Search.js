import React from 'react';
import './Search.css';
import { createBrowserHistory } from 'history';
import data from '../Data/data';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchResults:[],
            slectedSearchType:"title",
            serachStr:"",
            searchTypeOption:[{name:"title", label:"Title"}, {name:"author", label:"Author"}, {name:"subject", label:"Subject"}]
        }
    }
    componentWillMount(){
        const history = createBrowserHistory();
        if(this.props.location && !this.props.location.state.isLogin){
            history.push("/");
        }
    }
    handleSearch=()=>{
        console.log(this.state.slectedSearchType, this.state.serachStr);
        this.setState({
            searchResults :this.searchRecord(this.state.slectedSearchType, this.state.serachStr)
        });
    }

    searchRecord(type, searchStr){
        let results = data.bookSearchResults.filter((item)=>{
            return item[type] === searchStr;
        });
        return results;
    }

    render(){
        return (<div class="searchContainer"> <div>
            <div class="searchElem">
            <select onChange={(ev)=>{
                    this.setState({
                        slectedSearchType:ev.target.value 
                    });
            }}>
                 {this.state.searchTypeOption && 
                          this.state.searchTypeOption.map((item)=><option value={item.name}>{item.label}</option>)}
            </select>
            <input type="search" onChange={(ev)=>{
                    this.setState({
                        serachStr:ev.target.value 
                    });
            }}/>
            <input type="button" onClick={this.handleSearch} value="Search"/>
            </div>
            <table width="100%" border="1">
               <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Subject</th>
                    <th>Available Count</th>
                    <th>Book Rack</th>
               </tr>
               {this.state.searchResults && this.state.searchResults.map((res)=><tr>
                    <td>{res.title}</td>
                    <td>{res.author}</td>
                    <td>{res.subject}</td>
                    <td>{res.copies}</td>
                    <td>{res.rackNo}</td>              
               </tr>)}
            </table>
        </div></div>);
    }
}

export default Search;