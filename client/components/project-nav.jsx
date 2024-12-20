"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Card, CardContent } from "@mui/material";
import Image from "next/image";
import BeginnerProjectImage from "../public/images/beginner-project-image.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

export default function ProjectNav() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={(theme) => ({
            fontFamily: "var(--font-gmarket)",
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.primary.yellow,
            },
          })}
        >
          <Tab
            label={
              <Typography variant="h6" sx={{ color: "white" }}>
                기초 프로젝트 팀
              </Typography>
            }
          />
          <Tab
            label={
              <Typography variant="h6" sx={{ color: "white" }}>
                프로젝트 팀
              </Typography>
            }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 0 0.5rem 0 rgba(0, 0, 0, 0.1)",
            maxWidth: "45rem",
            margin: "0 auto",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              UCSD 멋사에는 비전공자들을 위한 기본적인 웹 프로젝트를 진행하는
              팀이 있습니다. 멋사 운영진들이 팀원들에게 기본적인 웹 프로그래밍
              기초를 알려주고, 팀원들은 이를 바탕으로 웹 프로젝트를 진행합니다.
            </Typography>
            <Image
              src={BeginnerProjectImage}
              alt="Beginner Project Image"
              style={{ width: "60%", height: "auto" }}
            />
          </CardContent>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 0 0.5rem 0 rgba(0, 0, 0, 0.1)",
            maxWidth: "40rem",
            margin: "0 auto",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              UCSD 멋사에는 웹 개발에 경험 있는 아기사자들을 위한 웹 프로젝트를
              진행하는 팀 입니다. 한 학기 동안 멋사 운영진들의 지도를 받아 웹
              프로젝트를 완성하고, 팀원들끼리의 협업을 통해 프로젝트를
              완성합니다.
            </Typography>
          </CardContent>
        </Card>
      </CustomTabPanel>
    </Box>
  );
}
