import { Box, Container, Typography } from "@mui/material";
import { mdiAccountMultiplePlus, mdiBolt, mdiShieldCheck } from "@mdi/js";
import ProcessSteps from "@/components/ProcessSteps";

export interface StepTypes {
  number: string;
  iconPath: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const steps: StepTypes[] = [
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
        px: { xs: 0, md: 1 },
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
              color: "primary.main",
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
              color: "primary.dark",
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
                bgcolor: "#e7e5e4",
                transform: "translateX(-50%)",
              }}
            />
          </Box>

          {/* Steps */}
          <ProcessSteps steps={steps} />
        </Box>
      </Container>
    </Box>
  );
};

export default ExchangeProtocol;
