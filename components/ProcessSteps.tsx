import { Box, Typography, Card, CardMedia, Link } from "@mui/material";
import Icon from "@mdi/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { StepTypes } from "./ExchangeProtocol";

const ProcessSteps = ({ steps }: { steps: StepTypes[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 12, md: 16, lg: 20 },
      }}
    >
      {steps.map((step, index) => {
        const isImageRight = index % 2 === 0;

        return (
          // horizontal step container
          <Box
            key={step.number}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
              gap: { xs: 4, md: 6, lg: 10 },
              alignItems: "center",
              position: "relative",
              alignContent: "stretch",
            }}
          >
            {/* Text Content (left box) */}
            <Box
              sx={{
                order: { xs: 1, lg: isImageRight ? 1 : 2 },
                position: "relative",
              }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 5, lg: 6 },
                  borderRadius: "24px",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                  bgcolor: "white",
                  position: "relative",
                  overflow: "visible",

                  "&:hover .step-number": { color: "#99a1af" },
                }}
              >
                {/* Large Step Number Background */}
                <Typography
                  className="step-number"
                  sx={{
                    position: "absolute",
                    top: { xs: 20, md: 40 },
                    right: { xs: 20, md: 40 },
                    fontSize: {
                      xs: "5rem",
                      sm: "7rem",
                    },
                    fontWeight: 700,
                    color: "#e5e7eb",
                    lineHeight: 0.8,
                    userSelect: "none",
                    zIndex: 0,
                    transition: "color 0.3s ease",
                  }}
                >
                  {step.number}
                </Typography>

                {/* Icon */}
                <Box
                  sx={{
                    width: { xs: 64, md: 72 },
                    height: { xs: 64, md: 72 },
                    borderRadius: "16px",
                    bgcolor: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Icon path={step.iconPath} size={1.5} />
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "1.75rem",
                      md: "2rem",
                      lg: "2.25rem",
                    },
                    fontWeight: 700,
                    color: "#1e293b",
                    mb: 2.5,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.0625rem" },
                    color: "#64748b",
                    lineHeight: 1.5,
                    mb: 3.5,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </Typography>

                {/* CTA Link */}
                <Link
                  href={step.ctaLink}
                  underline="none"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#10b981",
                    fontWeight: 600,
                    fontSize: "1rem",
                    position: "relative",
                    zIndex: 1,
                    transition: "gap 0.2s ease",

                    "&:hover": {
                      gap: 1.5,
                    },
                  }}
                >
                  {step.ctaText}
                  <ArrowForwardIcon sx={{ fontSize: 20 }} />
                </Link>
              </Card>
            </Box>

            {/* Image (right box) */}
            <Box
              sx={{
                order: { xs: 2, lg: isImageRight ? 2 : 1 },
                height: "100%",
              }}
            >
              <Card
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    transform: {
                      xs: "none",
                      lg: "perspective(1000px) rotateY(-1deg) scale(1.02)",
                    },
                    boxShadow: "0 28px 80px rgba(0, 0, 0, 0.16)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={step.image}
                  alt={step.title}
                  sx={{
                    width: "100%",
                    height: { xs: 320, sm: 380 },
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Box>

            {/* center dot */}
            <Box
              key={index}
              sx={{
                display: { xs: "none", lg: "block" },
                position: "absolute",
                left: "50%",
                top: `50%`,
                width: "23px",
                height: "23px",
                borderRadius: "50%",
                bgcolor: "#1e293b",
                transform: "translate(-50%, -50%)",
                border: "4px solid #fff",
                zIndex: 2,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProcessSteps;
