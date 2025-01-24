import React from "react";
import Btn1 from "../componet/Btn1";
import Btn2 from "../componet/Btn2";
import { Box, Container, Typography, Grid2 } from "@mui/material";
import img1 from "../img/home-1.png";
import backgrond_1 from "../img/19742.png";
import listImg from "../img/listImg.png";
import Box1 from "../componet/Box1";
import Box2 from "../componet/Box2";
import img2 from "../img/wordpress-2.png";
import img3 from "../img/Group-106.png";
import img4 from "../img/support.png";
import Box3 from "../componet/Box3";
import img5_1 from "../img/1.jpg";
import Accordion1 from "../componet/Accordion1";
import EmailIcon from "@mui/icons-material/Email";
import IconBtn from "../componet/IconBtn";

const Home = () => {
  return (
    <div>
      <Box
        width="100%"
        sx={{
          backgroundImage: `url(${backgrond_1})`,
          backgroundSize: "cover", // Ensures proper background scaling
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xxl">
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column layout for small screens
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" }, // Full width on small screens
                padding: {xs :"5px",md:"50px 20px"}, // Reduced padding for smaller screens
              }}
            >
              <Box
                sx={{
                  padding: "30px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#2d5087",
                  }}
                >
                  Fast WordPress Hosting
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: "30px", sm: "40px", md: "50px" },
                    fontWeight: "bolder",
                    fontFamily: "sans-serif",
                    lineHeight: "1.2",
                    color: "#021c40",
                  }}
                >
                  Establish Your{" "}
                  <Box
                    sx={{
                      display: "inline",
                      color: "#4e4feb",
                    }}
                  >
                    Business
                  </Box>{" "}
                  Presence On The Internet.
                </Box>
                <Typography
                  variant="subtitle1"
                  color="#042c66"
                  sx={{
                    marginBottom: "20px",
                    fontSize: { xs: "14px", sm: "16px" },
                  }}
                >
                  Experience lightning-fast speeds, unparalleled uptime, and
                  exceptional support with GoHost. Join thousands of satisfied
                  customers today!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap", // Allows buttons to stack
                  }}
                >
                  <Btn1 text="Choose A Plan" />
                  <Btn2 text="Get More Power" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "20px",
                    flexWrap: "wrap", // Allows stats to stack
                  }}
                >
                  {[
                    { count: "1M+", label: "Active Website" },
                    { count: "500K", label: "Worldwide Server" },
                    { count: "1M+", label: "Web Apps" },
                  ].map((item, index) => (
                    <Box key={index}>
                      <Typography
                        variant="subtitle1"
                        color="#021c40"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.count}
                      </Typography>
                      <Typography variant="subtitle2" color="#042c66">
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Right Section */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: "50px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={img1} alt="Main visual" style={{ width: "90%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={listImg}
                  alt="Expert Hosting Help"
                  style={{ width: "115px" }}
                />
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "#021c40",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                    textAlign: "left",
                  }}
                >
                  Expert Hosting <br /> Help
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        width="100%"
        sx={{
          padding: { xs: "50px 0", md: "100px 0" }, // Reduced padding for smaller screens
          backgroundColor: "#f6f9fd",
        }}
      >
        <Container maxWidth="xl">
          {/* Header Section */}
          <Box sx={{ textAlign: "center", padding: { xs: "20px", md: "0" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#0068ff",
                padding: "10px",
                fontSize: { xs: "14px", md: "16px" }, // Smaller text for smaller screens
              }}
            >
              Domain Register
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                lineHeight: { xs: "1.2", md: "1.5" },
                padding: "10px",
                color: "#021c40",
                fontSize: { xs: "24px", md: "32px" },
              }}
            >
              Why you need to register a <br />
              domain name.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                padding: "10px",
                color: "#495460",
                fontSize: { xs: "14px", md: "16px" }, // Adjust font size
              }}
            >
              The ideal domain instantly conveys your online purpose and
              uniqueness. Use our <br />
              domain search tool to find the perfect match and attract more
              visitors today.
            </Typography>
          </Box>

          {/* Grid Section */}
          <Box width="100%" sx={{ paddingTop: { xs: "30px", md: "50px" } }}>
            <Grid2
              container
              spacing={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" }, // Center align items for smaller screens
              }}
            >
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <Grid2
                    key={index}
                    size={{ xs: 12, sm: 6, md: 3 }} // Display 4 items per row on larger screens
                  >
                    <Box1
                      title="com"
                      detail="Establish trust with the most recognized domain names."
                      prise="45.45"
                    />
                  </Grid2>
                ))}
            </Grid2>
          </Box>
        </Container>
      </Box>

      <Box
        width="100%"
        padding="50px 0"
        sx={{
          backgroundImage: `url(${backgrond_1})`,
          backgroundSize: "contain",
        }}
      >
        <Container maxWidth="xl">
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Column */}
            <Box
              width={{ xs: "100%", md: "50%" }}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  height: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#0068ff" }}
                >
                  Domain Register
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    color: "#021c40",
                  }}
                >
                  Built for speed and security.
                </Typography>
                <Typography variant="body1" sx={{ color: "#495460" }}>
                  Maximize the potential of your WordPress website with
                  specialized hosting that delivers optimal performance. With
                  automated updates and backups, coupled with unparalleled load
                  times, experience WordPress in its most authentic form.
                </Typography>
                <Btn1 text="Get WordPress Hosting" />
              </Box>
            </Box>

            {/* Right Column */}
            <Box
              width={{ xs: "100%", md: "50%" }}
              padding="0"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src={img2} width="100%" alt="WordPress Hosting" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        width="100%"
        sx={{
          padding: "75px 0",
          backgroundColor: "#f6f9fd",
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#0068ff",
                paddingBottom: "10px",
              }}
            >
              Trending services
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                lineHeight: "35px",
                color: "#021c40",
              }}
            >
              Find The Perfect Help Offerings <br /> For Your Business
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#495460",
                marginTop: "10px",
              }}
            >
              Boost your online business with our premium products & services
            </Typography>
          </Box>

          {/* Grid Section */}
          <Box width="100%">
            <Grid2
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Card 1 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box2
                  img={img3}
                  title="WordPress Hosting"
                  detail="Get fast, reliable WordPress hosting with a 30-day money-back guarantee."
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 2 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box2
                  img={img3}
                  title="WordPress Hosting"
                  detail="Get fast, reliable WordPress hosting with a 30-day money-back guarantee."
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 3 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box2
                  img={img3}
                  title="WordPress Hosting"
                  detail="Get fast, reliable WordPress hosting with a 30-day money-back guarantee."
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 4 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box2
                  img={img3}
                  title="WordPress Hosting"
                  detail="Get fast, reliable WordPress hosting with a 30-day money-back guarantee."
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Box>





      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: '0',
          }}
        >
          <Box
            sx={{
              padding: "20px",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#0068ff" }}
            >
              Help Center
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                color: "#021c40",
              }}
            >
              How can we help?
            </Typography>
            <Typography variant="body1" sx={{ color: "#495460" }}>
              With how-to advice and award-winning support, GoHost <br /> Guides
              can help whether you’re a customer or not.
            </Typography>
            <Typography variant="body1" sx={{ color: "#495460" }}>
              Get in touch at 1-480-1123-231
            </Typography>
            <Btn1 text="Get Expert Help" />
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "20px 0", md: "50px 0" },
            backgroundColor: "#4e4feb",
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <img src={img4} alt="" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      </Box>

      <Box
        width="100%"
        sx={{ padding: "50px 0 50px 0", backgroundColor: "#f6f9fd" }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#0068ff", padding: "10px" }}
            >
              Reviews & rating
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                lineHeight: "35px",
                padding: "10px",
                color: "#021c40",
              }}
            >
              Trusted by 20+ million customers <br /> around the world.
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: "10px", color: "#495460" }}
            >
              4.7 out of 5 stars based on 98,190. | Showing our 4 <br /> and 5
              stars reviews.
            </Typography>
          </Box>
          <Box width="100%" paddingTop="50px">
            <Grid2 container spacing={3}>
              {[...Array(4)].map((_, index) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box3
                    img={img5_1}
                    name="Crystal H."
                    detail="GoHost has made creating a beautiful & professional looking website so easy! The email setup was quick too. Anytime I've had a question or even once a technical issue they have solved it in minutes!"
                  />
                  <Box3
                    img={img5_1}
                    name="Crystal H."
                    detail="I have been so impressed with the helpfulness I've received since switching to GoHost! I cannot recommend them enough!!"
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Container>
      </Box>





      <Box width="100%" sx={{ padding: "50px 0" }}>
  <Container maxWidth="xl">
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", color: "#0068ff", padding: "10px" }}
      >
        FAQs
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bolder",
          textTransform: "capitalize",
          lineHeight: "35px",
          padding: "10px",
          color: "#021c40",
        }}
      >
        Have questions? We've got <br /> answers.
      </Typography>
      <Typography
        variant="body1"
        sx={{ padding: "10px", color: "#495460" }}
      >
        Millions of customers rely on our domains and <br /> web hosting
        to get their ideas online.
      </Typography>
    </Box>
    <Box width="100%" paddingTop="50px">
      <Grid2 container spacing={3}>
        {[...Array(12)].map((_, index) => (
          <Grid2 size={{xs : 12 , sm : 6 ,md :4}}
            key={index}

          >
            <Accordion1
              question={`What is GoHost? (${index + 1})`}
              ans="GoHost is a comprehensive web hosting platform that offers a range of services to help individuals and businesses establish and maintain their online presence. From domain registration to website building tools and server hosting, GoHost provides everything you need to get your website up and running smoothly."
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  </Container>
</Box>





<Box
  width="100%"
  sx={{
    padding: "35px 0",
    backgroundColor: "#f6f9fd",
  }}
>
  <Container maxWidth="xl">
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 2, sm: 0 }, // Add spacing between stacked elements
      }}
    >
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "24px" }, // Adjust font size for smaller screens
            color: "#021c40",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Looking For Assistance?
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#021c40", marginTop: { xs: "10px", sm: "5px" } }}
        >
          Contact Our Acclaimed Customer Support At (480) 000-2500.
        </Typography>
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
        <IconBtn text="Contact Us" icon={<EmailIcon />} />
      </Box>
    </Box>
  </Container>
</Box>


  
    </div>
  );
};

export default Home;
