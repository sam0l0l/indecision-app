class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }
    render(){
        return (
            <div>
            <h1>{app.title}</h1>
            
            <button onClick={this.handleToggleVisibility}>
                {this.state.visible ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visible && (<p>tacos are yummy</p>)}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
