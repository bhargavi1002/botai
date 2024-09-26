import { Box, Stack, Typography, Grid, Card, CardContent } from "@mui/material";
import logo from "../../Assets/logo.png"
import SuggestionCard from "./SuggestionCard";

const InitialData= ({generateResponse}) => {
  const suggestions = [
    { heading: 'Hi, what is the weather?' },
    { heading: 'Hi, what is my location?' },
    { heading: 'Hi, what is the temperature?' },
    { heading: 'Hi, how are you?' }
  ];

  return (
    <Stack height={1} justifyContent="flex-end" p={{ xs: 2, md: 3 }}>
      <Stack alignItems="center" spacing={2} my={5}>
        <Typography variant="h2">
          How Can I Help You Today?
        </Typography>
        <Box
          component="img"
          src={logo}
          height={{ xs: 42, md: 70 }}
          width={{ xs: 42, md: 70 }} 
          boxShadow={4}
          borderRadius="50%"
        />
      </Stack>

      <Grid container spacing={{ xs: 1, md: 3 }}>
        {suggestions.map((item) => (
          <Grid item key={item.heading} xs={12} md={6}> 
             <SuggestionCard heading={item.heading} subtext={'Get an AI-generated response'} handleClick ={generateResponse} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default InitialData;
