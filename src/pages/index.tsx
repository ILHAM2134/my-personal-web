import Image from "next/image";
import { Typography, Box } from "@mui/material";
import Jumbotron from "@/components/home/Jumbotron";
import About from "@/components/home/About";
import Project from "@/components/home/Project";

export default function Home() {
  return (
    <Box sx={{ maxWidth: 1100, width: "100%" }}>
      <Jumbotron />
      <About />
      <Project />
    </Box>
  );
}
