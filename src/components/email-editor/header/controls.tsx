import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import dynamic from "next/dynamic";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { LiaStarSolid } from "react-icons/lia";
import Link from "@mui/material/Link";
const FullScreenPreview = dynamic(
  () => import("@/components/email-editor/share-modal"),
  {
    ssr: false
  }
);

const Controls = () => {
  const [isOpen, setModalVisibility] = useState(false);

  return (
    <Box mb={"1rem"} display="flex" justifyContent="space-between">
      <Box>
        <Alert severity="info">
          This project is currently under development, and there is a high
          likelihood of issues that I am actively addressing
        </Alert>
      </Box>

      <Box display="flex">
        <Button
          color="secondary"
          size="small"
          onClick={() => setModalVisibility(true)}
          startIcon={<SendIcon />}
          sx={{ textTransform: "none", mr: "1rem" }}
        >
          Share
        </Button>
        <Link
          component="a"
          fontSize="0.875rem"
          href="https://github.com/knowankit/email-editor"
          sx={{
            textTransform: "none",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <LiaStarSolid />
          &nbsp; Github
        </Link>
      </Box>
      <FullScreenPreview
        open={isOpen}
        onClose={val => setModalVisibility(val)}
      />
    </Box>
  );
};

export default Controls;
