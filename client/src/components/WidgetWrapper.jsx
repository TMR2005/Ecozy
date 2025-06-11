import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 0.75rem", 
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
  // boxShadow: theme.shadows[1],
  // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  //boxShadow: "rgba(60, 64, 67, 0.3) 0px 2px 4px -1px, rgba(60, 64, 67, 0.15) 0px 1px 3px -1px",
}));

export default WidgetWrapper;