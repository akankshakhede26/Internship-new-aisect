import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";
import CounterApp from "./components/CounterApp";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";

function App() {
  const profiles = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ padding: "20px", flex: 1, textAlign: "center" }}>
        <h2>Welcome to My React App!</h2>
        <p>Exploring React Components, Props, State Management, API Data Fetching, and Conditional Rendering.</p>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Week 3 - Day 5: Tasks 1 & 2 (Conditional Login Form & Welcome Message) */}
        <section>
          <LoginForm />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Week 3 - Day 4: Task 1 (Fetch Public API Data Using useEffect) */}
        <section>
          <UserList />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Week 3 - Day 4: Task 2 & Bonus (Display Posts Dynamically on Render with Loading & Error States) */}
        <section>
          <Posts />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Week 3 - Day 3: Task 1 (Counter App with useState) */}
        <section>
          <CounterApp />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Week 3 - Day 3: Task 2 (Dynamic Form with Live Preview) */}
        <section>
          <UserForm />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Task 2: Props & Dynamic Data */}
        <section>
          <h2>Dynamic Greetings (Props)</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
            <Greeting name="Priya" topic="React Components" />
            <Greeting name="Rohan" topic="JSX & Props" />
          </div>
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Task 3 & Bonus: Profile Cards via .map() */}
        <section>
          <h2>Team Profiles (.map())</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
            {profiles.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                role={user.role}
                image={user.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
