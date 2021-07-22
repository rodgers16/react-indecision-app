let details = null;

// const hideDetails = () => {
//   if (open) {
//     open = false;
//   } else {
//     open = true;
//   }

//   reRender();
// };

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      visible: "hidden",
    };
  }

  // hideDetails() {
  //   // hide here
  //   this.setState((prevState) => {
  //     return {
  //       setState
  //     };
  //   });
  // }

  showDetails() {
    this.setState((prevState) => {
      if (prevState.visible === "visible") {
        return { visible: "hidden" };
      } else if (prevState.visible === "hidden") {
        return { visible: "visible" };
      }
    });
  }

  render() {
    let details = "asdhasdhsadhgdsahasdhsdasgsd";
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.showDetails}>Show Details</button>
        <div>{this.state.visible === "visible" ? details : ""}</div>
      </div>
    );
  }
}

// const reRender = () => {
//   const html = (
//     <div>
//       <h1>Visiblity Toggle</h1>

//       {open === true ? details : ""}
//       <button onClick={hideDetails}>
//         {open ? "Hide Details" : "Show Details"}
//       </button>
//     </div>
//   );
const app = document.getElementById("app");
ReactDOM.render(<Toggle />, app);
