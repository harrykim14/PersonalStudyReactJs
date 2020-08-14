import React from 'react';
import 'App.css';

class App extends React.Component{
    render(){
        const name = 'React';
        // ES6에서는 더이상 var를 사용하지 않는다
        const style = {
            backgroundColor : 'skyblue',
            height : '30px'
        }
        
        return (
            <input type ="text" style = {style}/>
            /* 태그는 항상 닫아줘야 함 */
        );
    }
}

export default App;