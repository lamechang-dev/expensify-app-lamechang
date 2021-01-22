

const user = {
    name: 'Ryosuke',
    age: 26,
    location: 'Japan'
};

let count = 0;
function addCount() {
    count++;
}

let template = (
    <div>
        <button onClick={addCount}>+1</button>
        <p>{count}</p>
    </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);