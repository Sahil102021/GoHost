import React from "react";
import { Box, Button, Grid2, Icon, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";

const Box2 = (props) => {
  return (
    <div>
      <Box
        sx={{
          Width: "100%",
          height: "100%",
          padding: "40px",
          border: "1.5px solid #e8e8e8",
          borderRadius: "10px",
          boxShadow: "-4px 4px 0px #d8ecff",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bolder",
            textTransform: "capitalize",
            lineHeight: "0px",
            color: "#0e2954",
          }}
        >
          {props.title}
        </Typography>
        <br />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#2d5087",
              fontSize: "24px",
              padding: "3px",
            }}
          >
            $ {props.prise}{" "}
          </Typography>
          <h4 style={{ fontWeight: "500", color: "#2d5087" }}> / Year</h4>
        </Box>{" "}
        <br />
        <Button
          className="btn1"
          variant="outline"
          hover
          sx={{
            width: "100%",
            boxShadow: "-4px 4px 0px rgb(235 235 235)",
            margin: "0px 0px 20px 0px",
            padding: "7.5px 20px",
            backgroundColor: "#4e4feb",
            color: "#fff",
            textTransform: "capitalize",
            fontWeight: "500",
            "&:hover": {
              backgroundColor: "#021c40",
            },
          }}
        >
          Register Domain
        </Button>{" "}
        <br />
        <Typography
          variant="subtitle2"
          color="#021c40"
          sx={{ fontWeight: "700", lineHeight: "25px", color: "#495460" }}
        >
          {props.detail}
        </Typography>
        <br />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <OfflinePinIcon
            sx={{
              color: "#71e9b6",
              fontSize: "18px",
              padding: "5px 5px 5px 0",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "#021c40" }}
          >
            {props.trueValue1}
          </Typography>{" "}
          <br />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <OfflinePinIcon
            sx={{
              color: "#71e9b6",
              fontSize: "18px",
              padding: "5px 5px 5px 0",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "#021c40" }}
          >
            {props.trueValue2}
          </Typography>{" "}
          <br />
        </Box>{" "}
        <br /> <br /> <br />
       
      </Box>
    </div>
  );
};

export default Box2;
