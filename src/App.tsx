import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input
        label="Label"
        placeholder="Placeholder"
        helperText="Some interesting text"
        // error
        startIcon={<span className="material-icons">face</span>}
        endIcon={<span className="material-icons">face</span>}
        fullWidth
        multiline
        row={4}
      />
    </div>
  );
}

export default App;
