// components/ExchangeProtocol.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Link,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiAccountMultiplePlus, mdiBolt, mdiShieldCheck } from "@mdi/js";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Step {
  number: string;
  iconPath: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const steps: Step[] = [
  {
    number: "01",
    iconPath: mdiAccountMultiplePlus,
    title: "Create Your Profile",
    description:
      "Showcase your unique skills, experience, and the services you offer or need. Our intuitive setup makes it quick and easy to get started.",
    ctaText: "Join the Exchange",
    ctaLink: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    iconPath: mdiBolt,
    title: "Discover & Connect",
    description:
      "Explore a vibrant marketplace of talent or post your specific service requirements. Our smart matching algorithm helps you find the perfect collaboration.",
    ctaText: "Browse Talent",
    ctaLink: "#",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    iconPath: mdiShieldCheck,
    title: "Exchange & Grow",
    description:
      "Engage in seamless service exchanges, collaborate on projects, and build a powerful professional network. Track your progress and expand your opportunities.",
    ctaText: "Start Exchanging",
    ctaLink: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const ExchangeProtocol = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8, lg: 12 },
        bgcolor: "#f5f5f5",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "800px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
              fontWeight: 700,
              color: "#1e293b",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            The Exchange Protocol
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "#64748b",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            A seamless three-step process designed to maximize value and
            minimize friction.
          </Typography>
        </Box>

        {/* Steps Container */}
        <Box sx={{ position: "relative" }}>
          {/* Progress Line with Dots - Visible only on desktop */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            {/* Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                bgcolor: "#e2e8f0",
                transform: "translateX(-50%)",
              }}
            />
          </Box>

          {/* Steps */}
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
                    gap: { xs: 4, md: 6, lg: 8 },
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Text Content */}
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
                          lineHeight: 1.7,
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

                  {/* Image */}
                  <Box
                    sx={{
                      order: { xs: 2, lg: isImageRight ? 2 : 1 },
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
                          height: { xs: 320, sm: 380, md: 400 },
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  </Box>

                  {/* center dot */}
                  <Box
                    key={index}
                    sx={{
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
        </Box>
      </Container>
    </Box>
  );
};

export default ExchangeProtocol;
