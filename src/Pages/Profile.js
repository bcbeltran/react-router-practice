import React, { useEffect } from "react";
import { useNavigate, Link, Routes, Route, useMatch } from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";

const Profile = ({ login }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if(!login) {
            navigate("/login");
        }
	}, [login, navigate]);

	return (
        <>
            <h1>Profile Page</h1>
            <ul>
                <li>
                    <Link to={`/profile/view-profile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`/profile/edit-profile`}>Edit Profile</Link>
                </li>
            </ul>
            <Routes>
                <Route path={`/view-profile`} element={<ViewProfile />} />
                <Route path={`/edit-profile`} element={<EditProfile />} />
            </Routes>

        </>
    );
};

export default Profile;
