import { Box } from "@mui/material";
import Icon from "@mdi/react";
import { mdiStarFourPointsOutline, mdiStarFourPointsSmall } from "@mdi/js";

const CTASection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        py: 4,
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          color: "secondary.main",
          bgcolor: "secondary.light",
          borderRadius: "50%",
          position: "relative",

          "& .bg-star": {
            position: "absolute",
          },

          "& .bg-star:first-of-type": {
            top: "52%",
            left: "52%",
          },

          "& .bg-star:last-of-type": {
            bottom: "52%",
            right: "52%",
          },
        }}
      >
        <Icon className="bg-star" path={mdiStarFourPointsSmall} size={1} />
        <Icon path={mdiStarFourPointsOutline} size={2} />
        <Icon className="bg-star" path={mdiStarFourPointsSmall} size={1} />
      </Box>
    </Box>
  );
};

export default CTASection;
