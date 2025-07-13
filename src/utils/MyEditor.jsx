import { useRef } from "react";
import { Button, Box } from "@mui/material";
import {
  RichTextEditor,
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  MenuButtonBold,
  MenuButtonItalic,
} from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";

export default function MyEditor() {
  const rteRef = useRef(null); // removed TypeScript type

  return (
    <Box sx={{ paddingTop:"8px" }}>
      <RichTextEditor
        ref={rteRef}
        extensions={[StarterKit]}
        content="<p>Hello world</p>"
        renderControls={() => (
          <MenuControlsContainer>
            <MenuSelectHeading />
            <MenuDivider />
            <MenuButtonBold />
            <MenuButtonItalic />
          </MenuControlsContainer>
        )}
        editorProps={{
          attributes: {
            style:
              "min-height: 150px; border: 1px solid #d9dbde; padding: 10px; border-radius: 6px; background-color: #f9f9f9;",
          },
        }}
      />

     
    </Box>
  );
}
