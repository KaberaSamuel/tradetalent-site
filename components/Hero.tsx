import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        px: 1,
        py: 4,
        borderBottom: "1px solid #d1d5dc",
      }}
    >
      {/* Grid Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          zIndex: 0,

          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to bottom, transparent, #f8f9fa)",
            pointerEvents: "none",
          },
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 5,
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <Box>
            {/* Tagline */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 2,
                  bgcolor: "#14b8a6",
                  mr: 2,
                }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "#14b8a6",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                THE FUTURE OF WORK
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "4.5rem",
                  md: "5.5rem",
                  lg: "7rem",
                },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 2,
                color: "#1e293b",
              }}
            >
              Trade
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "4.5rem",
                  md: "5.5rem",
                  lg: "7rem",
                },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 4,
                color: "#14b8a6",
              }}
            >
              Talent.
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "#64748b",
                lineHeight: 1.6,
                mb: 5,
                maxWidth: "600px",
                fontWeight: 400,
              }}
            >
              A decentralized exchange for human potential. Connect,
              collaborate, and trade skills without monetary barriers.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#1e293b",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px 0 rgba(30, 41, 59, 0.39)",

                  "&:hover": {
                    bgcolor: "#334155",
                    boxShadow: "0 6px 20px rgba(30, 41, 59, 0.5)",
                  },
                }}
              >
                Join the Exchange
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "#1e293b",
                  borderColor: "#e2e8f0",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  textTransform: "none",
                  bgcolor: "white",
                  "&:hover": {
                    borderColor: "#cbd5e1",
                    bgcolor: "#f8fafc",
                  },
                }}
              >
                Explore Talents
              </Button>
            </Box>
          </Box>

          {/* Right Side - Image Card */}
          <Box sx={{ position: "relative" }}>
            <Card
              sx={{
                borderRadius: "24px",
                overflow: "hidden",
                transform: {
                  xs: "none",
                  lg: "perspective(1000px) rotateY(-3deg)",
                },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: {
                    xs: "none",
                    lg: "perspective(1000px) rotateY(-1deg) scale(1.02)",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                sx={{
                  width: "100%",
                  height: { xs: 400, md: 580 },
                  objectFit: "cover",
                }}
              />
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
