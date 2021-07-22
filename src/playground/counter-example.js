class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
    //this is the state of the componet
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count"); //this is JSON? need to stringify in order to manipulate?
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      console.log("Error" + e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;

// const addOne = () => {
//   count++;
//   renderDom();
// };
// const MinusOne = () => {
//   count--;
//   renderDom();
// };

// const setupReset = () => {
//   count = 0;
//   renderDom();
// };
// //this code runs before anything is rendered to the screen

// const somefunc = (e) => {
//   e.preventDefault;
//   const option = e.target.elements.option.value;
// };

// const renderDom = () => {
//   const template = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button id="my-id" className="some class" onClick={addOne}>
//         +1
//       </button>
//       <button id="subtractbutton" className="some class" onClick={MinusOne}>
//         -1
//       </button>
//       <button onClick={setupReset}>reset</button>
//       <form onSubmit={somefunc}>
//         <input type="text"></input>

//         <button>submit</button>
//       </form>
//     </div>
//   );
//   //takes two arguments first thes JSX youd like to render. The second is the DOM ELEMENT WHERE youd like to render it
//   // ReactDOM.render(template2, appRoot);
//   ReactDOM.render(template, appRoot);
// };
// renderDom();
