import Header from "./components/header/Header";
import Calendar from "./pages/Calendar/Calendar";
import { useState, useEffect } from "react";
function App() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [posts, setPosts] = useState(
        JSON.parse(window.localStorage.getItem(month)) || []
    );
    useEffect(() => {
        setPosts(JSON.parse(window.localStorage.getItem(month)));
    }, [month]);
    console.log(posts);
    return (
        <div className="App">
            <Header posts={posts} setPosts={setPosts} month={month} />
            <Calendar
                posts={posts}
                setPosts={setPosts}
                month={month}
                setMonth={setMonth}
            />
        </div>
    );
}

export default App;
