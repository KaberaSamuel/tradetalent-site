// components/OurPartners.tsx
"use client";

import { Box, Container, Typography, Card } from "@mui/material";
import { keyframes } from "@mui/system";

interface Partner {
  abbreviation: string;
  name: string;
}

const partners: Partner[] = [
  { abbreviation: "CS", name: "Creative Studios" },
  { abbreviation: "IL", name: "Innovation Labs" },
  { abbreviation: "DC", name: "Digital Collective" },
  { abbreviation: "SP", name: "Skill Exchange Pro" },
  { abbreviation: "TN", name: "Talent Network" },
  { abbreviation: "PG", name: "Professional Guild" },
  { abbreviation: "GM", name: "Global Minds" },
  { abbreviation: "TH", name: "TechHub Global" },
];

// Infinite scroll animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const OurPartners = () => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
            }}
          >
            Our Ecosystem Partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "primary.dark",
              fontWeight: 400,
            }}
          >
            Trusted by leading organizations worldwide
          </Typography>
        </Box>
      </Container>

      {/* Scrolling Partners Container */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          py: 2, // Add padding to prevent vertical cutoff

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: "60px", md: "120px" },
            zIndex: 2,
            pointerEvents: "none",
          },

          "&::before": {
            left: 0,
            background: "linear-gradient(to right, white, transparent)",
          },

          "&::after": {
            right: 0,
            background: "linear-gradient(to left, white, transparent)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            animation: `${scroll} 8s linear infinite`,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <Card
              key={`${partner.abbreviation}-${index}`}
              sx={{
                minWidth: { xs: "180px", sm: "220px", md: "260px" },
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                bgcolor: "#f8f9fa",
                border: "1px solid #e7e5e4",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "border-color 0.3s ease",
                cursor: "pointer",
                boxShadow: 0,

                "&:hover": {
                  borderColor: "secondary.main",
                },
              }}
            >
              {/* Abbreviation Box */}
              <Box
                sx={{
                  width: { xs: 64, md: 72 },
                  height: { xs: 64, md: 72 },
                  borderRadius: "12px",
                  bgcolor: "rgba(20, 184, 166, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    color: "secondary.main",
                  }}
                >
                  {partner.abbreviation}
                </Typography>
              </Box>

              {/* Partner Name */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.875rem", md: "0.9375rem" },
                  fontWeight: 500,
                  color: "primary.dark",
                }}
              >
                {partner.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurPartners;
