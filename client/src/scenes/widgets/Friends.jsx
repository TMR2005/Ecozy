import {Box, Typography, useTheme} from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import Friend from "components/Friend";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {setFriends} from "state";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Friends = ({ userId }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const navigate = useNavigate();

    const getFriends = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}/friends`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    }
    useEffect(() => {
        getFriends();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
        <Typography
            color={dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
        >
            echozyCircle
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends.map((friend) => (
                <Friend
                    key={friend._id}
                    friendId={friend._id}
                    name={`${friend.firstName} ${friend.lastName}`}
                    subtitle={friend.occupation}
                    userPicturePath={friend.picturePath}
                    onClick={() => navigate(`/profile/${friend._id}`)}
                />
            ))}
        </Box>
    </WidgetWrapper>

  );
}

export default Friends;