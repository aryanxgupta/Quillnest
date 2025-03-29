'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import { useEffect } from 'react'

const Tiptap = ({ content, setContent, editable=true }: { content: string, setContent?: React.Dispatch<React.SetStateAction<string>>, editable?: boolean}) => {
  const editor = useEditor({
    editable: editable,
    extensions: [
      StarterKit, 
      Document,
      Paragraph,
      Text,
      Heading,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc',
        },
        keepAttributes: true,
        keepMarks:true,
        itemTypeName: 'listItem'
      }), 
      Blockquote, 
      CodeBlock.configure({
        HTMLAttributes: {
          class: "w-full bg-gray-900 text-white p-4 rounded-md overflow-x-auto"
        }
      })
    ],
    content,
    onUpdate: ({ editor }) => {
      if(setContent) setContent(editor.getHTML())
    },
    editorProps: {
        attributes: {
            class: editable ? "min-h-[156px] bg-white rounded-xl p-5 outline-none ring-1 ring-zinc-100 rounded-t-none w-full font-ubuntu shadow-xl": ""
        }, 
        handleKeyDown(view, event) {
            if(event.key === "Tab"){
              event.preventDefault()
              view.dispatch(view.state.tr.insertText("    "))
              return true
            }
            return false
        },
    }
  })

  useEffect(()=>{
    if(editor && content !== editor.getHTML()){
      editor.commands.setContent(content)
    }
  }, [editor, content])

  return(
    <>
        {editable && <Menubar editor={editor} />}
        <EditorContent editor={editor} className='outline-none border-none bg-white rounded-xl rounded-t-none' />
    </>
  ) 
}

export default Tiptap
