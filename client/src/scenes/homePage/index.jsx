import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPost from "scenes/widgets/MyPost";
import Posts from "scenes/widgets/Posts";
import Friends from "scenes/widgets/Friends";

/*import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
*/
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
  <Navbar />
  <Box
    width="100%"
    padding="2rem 6%"
    display={isNonMobileScreens ? "flex" : "block"}
    gap="0.5rem"
    justifyContent={isNonMobileScreens ? "space-between" : "center"}
  >
    {/* Left Column */}
    <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
      <UserWidget userId={_id} picturePath={picturePath} />
    </Box>

    {/* Middle Column */}
    <Box
      flexBasis={isNonMobileScreens ? "42%" : undefined}
      mt={isNonMobileScreens ? undefined : "2rem"}
    >
      <MyPost picturePath={picturePath} />
      <Posts userId={_id} />
    </Box>

    {/* Optional Right Column (can leave empty or add widgets) */}
    {isNonMobileScreens && (
      <Box flexBasis="26%">
        <Friends userId={_id} />
      </Box>
    )}
  </Box>
</Box>

    );
};

export default HomePage;