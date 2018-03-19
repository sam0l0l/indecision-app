let visible = false;

const app = {
    title: 'Visibility Toggle',
    subtitle: 'yakakaka yaka yaka'
}

const toggleVisible = () => {
    visible = !visible;
    render();
};


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            
            <button onClick={toggleVisible}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {visible && (<p>tacos are yummy</p>)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();