import { useState } from "react";
import { Dialog, Avatar, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Image from "next/image";

export default function ModalImg({ src }: { src: any }) {
  const [state, setState] = useState({
    openDialog: false,
    openDitolak: false,
  });

  const useStyles = makeStyles({
    dialog: {
      width: "100vw",
      // height: "100%",
      scrollbarColor: "transparent",
    },
    backDrop: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  });
  const classes = useStyles();

  const handleClickOpen = () => {
    setState((prev) => ({
      ...prev,
      openDialog: true,
    }));
  };

  const handleClose = () => {
    setState((prev) => ({
      ...prev,
      openDialog: false,
    }));
  };

  console.log(src);

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <Box
        sx={{
          position: "relative",
          height: "65vh",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        <Image
          src={src}
          alt="project-1"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: "8px" }}
        />
      </Box>

      <Dialog
        open={state.openDialog}
        fullWidth
        maxWidth="lg"
        onClose={handleClose}
        // classes={{
        //   paper: classes.dialog,
        // }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
        sx={{ py: 2, px: 4 }}
      >
        <Box sx={{ py: 3, px: 3, m: 0 }}>
          <h1 className="text-18 font-semibold text-black mb-3">Img Detail</h1>
          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              minWidth: "100%",
              minHeight: "100%",
              my: 3,
            }}
            onClick={handleClickOpen}
          >
            <Image
              src={src}
              alt="project-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // width={0}
              // height={0}
              style={{ borderRadius: "8px" }}
            />
          </Box>
          <Button
            variant="outlined"
            color="warning"
            // className="w-fullelevation-z0 p-2 mt-4"
            onClick={handleClose}
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            Close
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}
