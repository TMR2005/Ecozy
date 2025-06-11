import { Box } from "@mui/material";
import { styled } from "@mui/system";

const UserImage = ({ image, size = "60px" }) => {
  const UserImageStyled = styled("img")({
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
  });

  return (
    <Box>
      <UserImageStyled src={`http://localhost:3001/assets/${image}`} alt="user" />
    </Box>
  );
}

export default UserImage;