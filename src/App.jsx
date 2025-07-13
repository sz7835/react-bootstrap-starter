import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
        logo="MyProject"
        links={[
          { name: "Home", to: "#", useRouter: false },
          { name: "Projects", to: "#", useRouter: false },
          { name: "Contact", to: "#", useRouter: false },
        ]}
      />

      <main className="container py-5">
        <h1 className="mb-4">Welcome to MyProject</h1>
        <p>This is a clean, reusable React + Bootstrap starter template.</p>
      </main>
    </>
  );
}

export default App;
