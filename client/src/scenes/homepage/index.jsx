import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar/navbar";
import UserWidget from "scenes/widgets/UserWidgets";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);

  // Check if the user object is properly fetched
  console.log(user); // Debugging line

  if (!user) {
    return <div>Loading...</div>; // Handle loading state or redirect as needed
  }

  const { _id, picturePath } = user;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* Add content here or other widgets */}
            <MyPostWidget picturePath={picturePath}/>

        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">{/* Additional widgets or content */}</Box>}
      </Box>
    </Box>
  );
};

export default HomePage;
