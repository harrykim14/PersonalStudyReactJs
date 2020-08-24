import React from 'react';

class App extends React.Component{
    render(){
        const name = 'React';
        // ES6에서는 더이상 var를 사용하지 않는다
        const style = {
            backgroundColor : 'skyblue',
            height : '30px'
        }
        
        return (
            <component>
            
            <input type ="text" style = { style }/>
            <div>
                <h1>리액트</h1>
            </div>
            
            </component>
        );
    }
}

export default App;