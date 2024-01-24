import {Routes,Route} from "react-router-dom";
import SocialApp from "../Component/SocialComponent";
import UserProfileDetail from "../UserProfile/UserProfile";

export default function CustomRoutes(){

    return <Routes>
        <Route path="/" element={ <SocialApp />} />
        <Route path="/user/:id" element={ <UserProfileDetail/> } />
    </Routes>
}
