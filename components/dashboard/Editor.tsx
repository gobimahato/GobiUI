"use client";

import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "../ui/button";

// Toolbar for text formatting in the editor
export function MenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) return null; // Ensure editor instance exists

  return (
    <div className="flex flex-wrap gap-5">
      {/* Heading buttons */}
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
      >
        H1
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
      >
        H2
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
      >
        H3
      </Button>

      {/* Text styling buttons */}
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "secondary"}
      >
        Bold
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "secondary"}
      >
        Italic
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "secondary"}
      >
        Strike
      </Button>
    </div>
  );
}

// Main editor component with Tiptap integration
export function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[200px] prose prose-sm sm:prose-base",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="mt-2 min-h-[200px] rounded-lg border p-2"
      />
    </div>
  );
}
