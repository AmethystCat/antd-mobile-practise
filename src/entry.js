import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ant mobile test';
    }
    render() {
        const style1 = {maxWidth: '375px', height: '667px', padding: '10px'};
        const style2 = { margin: '10px 0' };
        return (
            <div className="contaier" style={style1}>
                <div style={style2}>
                    <Button>default 按钮</Button>
                </div>
                
                <div style={style2}>
                    <Button type="warning">warning 按钮</Button>
                </div>

                <div style={style2}>
                    <Button loading>loading 按钮</Button>
                </div>
                
                
                <div style={style2}>
                    <Button type="primary">primary按钮</Button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<div>
        		<h1>Hello world! (♥◠‿◠)ﾉ</h1>
        		<div><h3>ant mobile comnponents _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_</h3></div>
        		<Test/>
        	</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));