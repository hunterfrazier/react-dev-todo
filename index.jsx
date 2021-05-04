function App() {


    const addEvent = (text) => {
      const newEvents = [
        ...todos,
        {
          text: text,
          isCompleted: false
        },
      ];
      setTodos(newEvents);
    };
  
    const EventForm = () => {
      const [value, setValue] = React.useState("");
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        // addEvent(value, new Date().toLocaleTimeString());
        addEvent(value);
      };
  
      return (
        <form onSubmit={handleSubmit}>
          <input
            id="task-input"
            type="text"
            value={value}
            placeholder="Add To-Do"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn-primary">Submit</button>
        </form>
      );
    };
  
    // const removeTodo = (index) => {
    //   let temp = [...todos];
    //   temp.splice(index, 1);
    //   // console.log(index, temp);
    //   console.log(temp);
    //   setTodos(temp);
    // };

    const removeTodo = e => {
      const index = Number(e.target.id);
      console.log(Number(e.target.id));
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
  
    const [todos, setTodos] = React.useState([
      {
        text: "Learn State",
        isCompleted: "completed",
      },
      {
        text: "Learn Component",
        isCompleted: "completed",
      },
      {
        text: "Learn React",
        isCompleted: "",
      },
    ]);
    return (
      <>
        {todos.map((todo, i) => (
          <div
            key={i}
            id={i}
            title="click to remove item"
            className="planner-item"
            // onClick={(i) => removeEvent(i)}
            onClick={removeTodo}
          >
            {todo.text} - {todo.isCompleted || "not completed"}
          </div>
        ))}
        <EventForm addEvent={addEvent} />
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  