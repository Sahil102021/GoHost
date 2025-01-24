import React from 'react'
import { Box, Button, Container, Divider, Grid2, Typography } from '@mui/material';
import minLogo from '../img/Logo_GoHost_v2-1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
      <Box
  width="100%"
  sx={{
    padding: "50px 0",
    backgroundColor: "black",
    color: "#fff",
    borderBottom: "0.5px solid #495460",
  }}
>
  <Container maxWidth="xl">
    <Box width="100%">
      <Grid2 container spacing={2}>
        {/* Repeating Grid Items */}
        {["Company", "Support", "Resources", "Account", "Shopping"].map(
          (title, index) => (
            <Grid2 size={{xs : 12 , sm : 6 , md : 2.4}}
              key={index}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <ul
                style={{
                  lineHeight: "25px",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    paddingBottom: "10px",
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {title}
                </li>
                {[
                  "About us",
                  "Contact us",
                  "Our Blog",
                  "Investor Relations",
                  "Careers",
                  "343",
                ].map((item, idx) => (
                  <li key={idx} style={{ margin: "5px 0" }}>
                    <Typography color='#DDDDDD' sx={{fontSize : '14px'}}>{item}</Typography>
                  </li>
                ))}
              </ul>
            </Grid2>
          )
        )}
      </Grid2>
    </Box>
  </Container>
</Box>




<Box
  width="100%"
  sx={{
    padding: "25px 0",
    backgroundColor: "black",
    color: "#fff",
  }}
>
  <Container maxWidth="xl">
    {/* Logo and Links Section */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {/* Logo */}
      <Box
        width="125px"
        paddingRight={{ xs: "0", sm: "10px" }}
        sx={{ marginBottom: { xs: "15px", sm: "0" } }}
      >
        <img src={minLogo} width="100%" alt="Logo" />
      </Box>

      {/* Links */}
      <Box>
        <ul
          className="ul-2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "start" },
            padding: 0,
            listStyle: "none",
            gap: "10px",
          }}
        >
          <li>Terms & Conditions</li>
          <li>|</li>
          <li>Privacy Policy</li>
          <li>|</li>
          <li>Refund Policy</li>
          <li>|</li>
          <li>Trademarks</li>
        </ul>
      </Box>
    </Box>

    <br />

    {/* Copyright and Social Media Section */}
    <Box width="100%">
      <Grid2 container spacing={2}>
        {/* Copyright Text */}
        <Grid2 size={{xs : 12 , md : 8}} >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: "#DDDDDD",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Copyright © 2024, GoHost Operating Company, LLC. All Rights Reserved. 
            The GoHost word mark is a registered trademark of GoHost Operating Company.
          </Typography>
        </Grid2>

        {/* Social Media Icons */}
        <Grid2  size={{xs : 12 , md : 4}} >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: "10px",
            }}
          >
            {[FacebookIcon, XIcon, YouTubeIcon, InstagramIcon].map(
              (IconComponent, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#fff",
                    color: "black",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconComponent sx={{ fontSize: "16px" }} />
                </Box>
              )
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  </Container>
</Box>


    </div>
  )
}

export default Footer