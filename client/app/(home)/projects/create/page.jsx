"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import { MDXEditorMethods } from "@mdxeditor/editor";

const MdxEditorComponent = dynamic(
  () => import("../../../../components/editor-component"),
  {
    ssr: false,
  }
);

const initialMarkdown = `# Hello world\n\nWrite your project details here...`;

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const editorRef = useRef(null);

  const handleSubmit = () => {
    const markdown = editorRef.current?.getMarkdown?.() || "";
    const projectData = {
      title,
      description,
      markdown,
    };

    console.log("Submitting project:", projectData);
    // TODO: Send to API or store in database
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        paddingTop: 12,
        gap: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Archive a Project
      </Typography>

      <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: 1200 }}>
        <Stack spacing={3}>
          <TextField
            label="Project Title *"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="One-line Description *"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Project Details:
            </Typography>
            <MdxEditorComponent
              markdown={initialMarkdown}
              editorRef={editorRef}
            />
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit Project
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
