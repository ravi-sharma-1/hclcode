import React from 'react';
import './Search.css';
class Search extends React.Component{
    render(){
        return (<div class="tableContainer"> <div>
            <table>
               <tr>
                 <th>No.</th>
                 <th>Name</th>
                 <th>Description</th>
                 <th>Action</th>
               </tr>
               <tr>
                  <td>1</td>
                  <td>Task1</td>
                  <td>Lorem Ipsum</td>
                  <td><input type="button" value="Edit"/><input type="button" value="Edit"/></td>                
               </tr>
            </table>
        </div></div>);
    }
}

export default Search;