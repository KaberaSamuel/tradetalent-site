import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Link,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <PersonAddIcon sx={{ fontSize: 32 }} />,
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
    icon: <BoltIcon sx={{ fontSize: 32 }} />,
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
    icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />,
    title: "Exchange & Grow",
    description:
      "Engage in seamless service exchanges, collaborate on projects, and build a powerful professional network. Track your progress and expand your opportunities.",
    ctaText: "Start Exchanging",
    ctaLink: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

const ExchangeProtocol = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f8f9fa",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 10 }, maxWidth: "800px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              color: "#1e293b",
              mb: 2,
            }}
          >
            The Exchange Protocol
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "#64748b",
              fontWeight: 400,
            }}
          >
            A seamless three-step process designed to maximize value and
            minimize friction.
          </Typography>
        </Box>

        {/* Steps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 8, md: 12 },
          }}
        >
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
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
                    order: { xs: 1, lg: isEven ? 1 : 2 },
                    position: "relative",
                  }}
                >
                  {/* Large Step Number Background */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: -40,
                      right: isEven
                        ? { xs: 20, lg: 0 }
                        : { xs: 20, lg: "auto" },
                      left: isEven ? "auto" : { xs: "auto", lg: 0 },
                      fontSize: { xs: "8rem", md: "10rem", lg: "12rem" },
                      fontWeight: 700,
                      color: "rgba(0, 0, 0, 0.03)",
                      lineHeight: 1,
                      userSelect: "none",
                      zIndex: 0,
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Card
                    sx={{
                      p: { xs: 3, md: 4, lg: 5 },
                      borderRadius: "24px",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      bgcolor: "white",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "16px",
                        bgcolor: "#14b8a6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mb: 3,
                      }}
                    >
                      {step.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.75rem", md: "2rem" },
                        fontWeight: 700,
                        color: "#1e293b",
                        mb: 2,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        color: "#64748b",
                        lineHeight: 1.7,
                        mb: 3,
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
                        color: "#14b8a6",
                        fontWeight: 600,
                        fontSize: "1rem",
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
                    order: { xs: 2, lg: isEven ? 2 : 1 },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={step.image}
                      alt={step.title}
                      sx={{
                        width: "100%",
                        height: { xs: 300, md: 400, lg: 500 },
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ExchangeProtocol;
