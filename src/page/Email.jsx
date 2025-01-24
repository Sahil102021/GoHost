import React from 'react'
import { Box, Container, Typography, Grid2 } from "@mui/material";
import Btn3 from "../componet/Btn3";
import Btn2 from "../componet/Btn2";
import backgrond_1 from "../img/19742.png";
import img1 from "../img/email-1.png";
import listImg from "../img/listImg.png";
import Box4 from "../componet/Box4";
import img3 from "../img/Group-106.png";
import icon_1 from "../img/icon_1.png"
import icon_2 from "../img/icon_2.png"
import icon_3 from "../img/icon_3.png"
import icon_4 from "../img/icon_4.png"
import icon_5 from "../img/icon_5.png"
import icon_6 from "../img/icon_6.png"
import icon_7 from "../img/icon_7.png"
import icon_8 from "../img/icon_8.png"
import img4 from "../img/support.png";
import Box3 from "../componet/Box3";
import Box5 from "../componet/Box5";
import Box2 from "../componet/Box2";
import img5_1 from "../img/1.jpg";
import Accordion1 from "../componet/Accordion1";
import EmailIcon from "@mui/icons-material/Email";
import IconBtn from "../componet/IconBtn";




const WebsiteBuild = () => {
  return (
    <div>
      <Box
        width="100%"
        sx={{
          color : "#fff",
          backgroundColor:'#4e4feb',
          // backgroundImage: `url(${backgrond_1})`,
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
                padding: { xs: "5px", md: "50px 20px" }, // Reduced padding for smaller screens
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
                    color: "#fff",
                  }}
                >
                  Domain Emails
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: "30px", sm: "40px", md: "50px" },
                    fontWeight: "bolder",
                    fontFamily: "sans-serif",
                    lineHeight: "1.2",
                    color: "#fff",
                  }}
                >
                  Professional {" "}
                  <Box
                    sx={{
                      display: "inline",
                      color: "#27E1C1",
                    }}
                  >
                    Business  
                  </Box>{" "}
                  Email                </Box>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  sx={{
                    marginBottom: "20px",
                    fontSize: { xs: "14px", sm: "16px" },
                  }}
                >
                  Answer a few questions and get a customizable site up and running fast
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap", // Allows buttons to stack
                  }}
                >
                  <Btn3 text="Start for free"></Btn3>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "20px",
                    flexWrap: "wrap", // Allows stats to stack
                  }}
                >
                  {[{ count: "1M+", label: "No credit card required.*" }].map(
                    (item, index) => (
                      <Box key={index}>
                        <Typography
                          variant="subtitle1"
                          color="#fff"
                          sx={{
                            fontWeight: "bold",
                          }}
                        >
                          {item.count}
                        </Typography>
                        <Typography variant="subtitle2" color="#fff">
                          {item.label}
                        </Typography>
                      </Box>
                    )
                  )}
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
              Website Builder
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
              A plan for every plan.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#495460",
                marginTop: "10px",
              }}
            >
              BDiscover the ideal solution tailored to your needs with our diverse range of plans,<br /> each complemented by our powerful website builder.
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
                <Box5
                  img={img3}
                  title="WordPress Hosting"
                  detail="Professional email with 10GB of email storage"
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 2 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box5
                  img={img3}
                  title="WordPress Hosting"
                  detail="Professional email with 10GB of email storage"
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 3 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box5
                  img={img3}
                  title="WordPress Hosting"
                  detail="Professional email with 10GB of email storage"
                  trueValue1="Fast Load Time"
                  trueValue2="Secure Hosting"
                  prise="2.49"
                />
              </Grid2>
              {/* Card 4 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box5
                  img={img3}
                  title="WordPress Hosting"
                  detail="Professional email with 10GB of email storage"
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
             Website Builder Features
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
              8 Reasons to build your website <br /> with our website builder
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#495460",
                marginTop: "10px",
              }}
            >
             With our website builder, you have everything you need to create a  <br /> stunning and successful website that stands out from the crowd.
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
                <Box4
                  img={icon_1}
                  title="The Vision"
                  detail="At the heart of our mission lies a compelling vision, driving every decision and action we take."
                />
              </Grid2>
              {/* Card 2 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_2}
                  title="Secure & Private"
                  detail="Rest assured with our secure and private solution, ensuring your data stays protected and your privacy remains paramount."

                />
              </Grid2>
              {/* Card 3 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_3}
                  title="99.9% Uptime"
                  detail="Experience peace of mind with our reliable service boasting a 99.9% uptime guarantee, ensuring your operations run smoothly without disruption."

                />
              </Grid2>
              {/* Card 4 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_4}
                  title="Storage to Scale"
                  detail="Unlock unlimited potential with our scalable storage solutions, empowering your business to grow without limits."
                />
              </Grid2>
              {/* Card 5 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_5}
                  title="Manage Anywhere"
                  detail="Seamlessly oversee your operations from anywhere with our versatile management platform."
                />
              </Grid2>
              {/* Card 6 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_6}
                  title="Real-time monitoring"
                  detail="Stay ahead of the curve with instant insights into your systems and operations."
                />
              </Grid2>
              {/* Card 7 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_7}
                  title="affordable prices"
                  detail="Unlock value with our budget-friendly pricing options, offering affordability without compromising on quality or service."
                />
              </Grid2>
              {/* Card 8 */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <Box4
                  img={icon_8}
                  title="All In One Place"
                  detail="Streamline your workflow with centralized access to all essential tools and resources."
                />
              </Grid2>

            </Grid2>
          </Box>
        </Container>
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
        {[...Array(8)].map((_, index) => (
          <Grid2 size={{xs : 12 , sm : 6 }}
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
  )
}

export default WebsiteBuild