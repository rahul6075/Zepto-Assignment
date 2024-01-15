import { TagInput } from "./components/TagInput";

function App() {
  const options = [
    {
      label: "Rahul Chaudhary",
      value: "1",
      description: "198rahulchaudhary@gmail.com",
    },
    { label: "Gulshan Gupta", value: "2", description: "pool4T7@gmail.com" },
    { label: "Jhon Doe", value: "3", description: "jhon@123.com" },
    { label: "Rajiv Shahu", value: "4", description: "rajivshahu@gmail.com" },
  ];

  return (
  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Assignment Task: Multi Select</h1>
        <div style={{ minWidth: "50vw" }}>
          <TagInput options={options} />
        </div>
      </div>
  );
}

export default App;
