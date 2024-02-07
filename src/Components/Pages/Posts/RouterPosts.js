import { Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import ShowPost from "./ShowPost";
import EditPost from "./EditPost";

        
const RouterPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts/>}/>
            <Route path="/create" element={<CreatePost/>}/>
            <Route path="/:id" element={<ShowPost/>}/>
            <Route path="/editposts/:id" element={<EditPost/>}/>
        </Routes>
    );
};
export default RouterPosts;