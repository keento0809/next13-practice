import { Box } from "@mui/material";
import ImageUrl from "@/public/images/top-bg-image.jpg";

type BgWrapperProps = {
  children: React.ReactNode;
};

export const BgWrapper: React.FC<BgWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{ backgroundImage: `url(${ImageUrl.src})`, backgroundSize: "cover" }}
    >
      <Box sx={{ paddingTop: "64px" }}>{children}</Box>
    </Box>
  );
};
