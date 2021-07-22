// console.log("app js hdfghfdgi s running");
const pageInfo = {
  title: "heres my page title",
  subtitle: "my subtitle",
  options: [],
};

//this arrow function will get called with the event object
const onFormSubmit = (e) => {
  //e contains various information about the event
  e.preventDefault();

  const option = e.target.elements.option.value;
  //e(the event object/infortion).target(is an HTML REFRENCE PROPERTY).option(is the name of the html element).value(is the val of that html element)
  //elements are indexed by name
  if (option) {
    pageInfo.options.push(option);
    e.target.elements.option.value = "";
    renderDom();
  }

  //we need to reference the func instead of calling because we will get undefined
};
const onButtonClick = (e) => {
  pageInfo.options = [];
  renderDom();
};

const whatToDo = () => {
  const randomNum = Math.floor(Math.random() * pageInfo.options.length);
  const option = pageInfo.options[randomNum];
  alert(option);
};

// jsx expression
const numbers = [4, 64, 35];
const renderDom = () => {
  const template = (
    <div>
      <h1> {pageInfo.title ? pageInfo.title : "title does not exists"}</h1>
      <p>{pageInfo.subtitle ? pageInfo.subtitle : "sub does not exist"}</p>
      {
        /* {pageInfo.options.length > 0 ? (
          <button onClick={whatToDo}>What to do?</button>
        ) : (
          "you have no option"
        )} */

        <button onClick={whatToDo} disabled={!pageInfo.options.length}>
          What to do?
        </button>
      }
      <ol>
        {
          /* {pageInfo.options.map((option) => {
            return <li key={option}>options: {option}</li>;
          })} */
          pageInfo.options.map((option) => (
            <li key={option}>option: {option}</li>
          ))
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
        <button onClick={onButtonClick}>remove all</button>
      </form>
    </div>
  );
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

// var user = {
//   name: "patrick",
//   age: 18,
//   location: "pittsburgh",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>location: {location}</p>;
//   }
// }

// function checkAge(age) {
//   if (age < 18) {
//     return <h1>The user is underage</h1>;
//   } else {
//     return <p>The users age is: {age}</p>;
//   }
// }

// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>the users age is {user.age}</p>}
//     {user.location ? user.location : "location not found"}
//   </div>
// );
//have to use document api to retrive element here
renderDom();
