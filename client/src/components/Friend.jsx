import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "state";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const { _id } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    const friends = useSelector((state) => state.user.friends);
    const isFriend = friends.find((friend) => friend._id === friendId);

    const patchFriend = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${friendId}`,
            {
                method: "PATCH",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    }

    return(
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box
                    onClick={() => navigate(`/profile/${friendId}`)}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                >
                    <Typography color={main} variant="h5" fontWeight="500" sx = {{
                        "&:hover": {
                            color: palette.primary.light,
                            transition: "color 0.3s ease-in-out",
                            cursor: "pointer"
                        }
                    }}>
                        {name}
                    </Typography>
                    <Typography color={medium}>
                        {subtitle || "Hey there, I'm using Sociopedia!"}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton
                onClick={patchFriend}
                sx={{ backgroundColor: main }}
            >
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: dark }} />
                ) : (
                    <PersonAddOutlined sx={{ color: dark }} />
                )}
            </IconButton>
        </FlexBetween>
    );
}
export default Friend;