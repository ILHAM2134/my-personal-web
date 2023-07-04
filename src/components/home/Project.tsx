import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import ModalImg from "@/components/ModalImg";
import p1 from "@public/img/project1.jpg";
import p2 from "@public/img/project2.jpg";

const Project = () => {
  return (
    <Box
      id="projects"
      sx={{
        mt: {
          xs: 24,
          md: 16,
        },
        pt: {
          xs: 5,
          md: 3,
        },
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        className="child-snap"
        sx={{ mt: { xs: 1, md: 8, height: "100vh" } }}
      >
        <Grid item xs={12} sm={12}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Projects Highlight
              <hr
                style={{
                  border: "1px solid",
                  width: "100px",
                  marginLeft: "250px",
                }}
              />
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={8}>
          <ModalImg src={p1} />
        </Grid>
        <Grid item xs={12} md={4} textAlign="right">
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: 600 }}
            >
              Ajar-in
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                opacity: 0.9,
                mt: 2,
              }}
            >
              this is my MBKM's program group project, my role is in Backend,
              specifically in users API CRUD, such as register, login, update,
              and delete user
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - Reactjs
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - Expressjs
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - MongoDB
            </Typography>
            <motion.div
              whileHover={{ opacity: 0.7, x: 1.1 }}
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Button
                variant="outlined"
                href="https://ajar-in.netlify.app/"
                target="_blank"
                sx={{ mt: 2 }}
              >
                Visit site
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        className="child-snap"
        sx={{ mt: { xs: 1, md: 8 }, height: "100vh" }}
      >
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: 600 }}
            >
              Whatever Blog
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                opacity: 0.9,
                mt: 2,
              }}
            >
              this is blog app with Sanity CMS to manage blog content,
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - Nextjs Typescript
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - Material UI
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                mt: 2,
              }}
            >
              - Sanity CMS
            </Typography>
            <motion.div
              whileHover={{ opacity: 0.7, x: 1.1 }}
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Button
                variant="outlined"
                href="https://whateverblog.vercel.app/"
                target="_blank"
                sx={{ mt: 2 }}
              >
                Visit site
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={8}>
          <ModalImg src={p2} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
