import React from 'react'
import { Editor } from '@tiptap/react'
import { Toggle } from './ui/toggle'
import { Bold, CodeXml, Heading1, Heading2, Heading3, Heading4, Italic, Strikethrough, ListIcon, ListOrdered, Quote, LucideSeparatorHorizontal, CornerDownLeft, Undo, Redo, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

const Menubar = ({editor}: {editor: Editor | null}) => {
    if (!editor) {
        return null
    }

    return (
    <div className="control-group">
        <div className="button-group flex items-center gap-1 justify-center rounded-b-none border-b-zinc-100 border-b-[1px] flex-wrap rounded-xl shadow-xl py-2 ring-2 ring-zinc-100">
        <Toggle 
            variant={'outline'}
            aria-label="Toggle bold" 
            disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
            }
            pressed={editor.isActive('bold')}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
            <Bold className="h-4 w-4" />
        </Toggle>

        <Toggle 
            variant={'outline'}
            aria-label="Toggle italic" 
            disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
            }
            pressed={editor.isActive('italic')}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
            <Italic className="h-4 w-4" />
        </Toggle>

        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            disabled={
            !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            pressed={editor.isActive('strike')}
        >
            <Strikethrough className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            pressed={editor.isActive('heading', { level: 1 })}
        >
            <Heading1 className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            pressed={editor.isActive('heading', { level: 2 })}
        >
            <Heading2 className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            pressed={editor.isActive('heading', { level: 3 })}
        >
            <Heading3 className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            pressed={editor.isActive('heading', { level: 4 })}
        >
            <Heading4 className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            pressed={editor.isActive('bulletList')}
        >
            <ListIcon className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            pressed={editor.isActive('orderedList')}
        >
            <ListOrdered className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
            pressed={editor.isActive('codeBlock')}
        >
            <CodeXml className='h-4 w-4'/>

        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
            pressed={editor.isActive('blockquote')}
        >
            <Quote className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'} onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}>
            <LucideSeparatorHorizontal className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'} onPressedChange={() => editor.chain().focus().setHardBreak().run()}>
            <CornerDownLeft className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().undo().run()}
            disabled={
            !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
        >
            <Undo className='h-4 w-4'/>
        </Toggle>
        <Toggle
            variant={'outline'}
            onPressedChange={() => editor.chain().focus().redo().run()}
            disabled={
            !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
        >
            <Redo className='h-4 w-4'/>
        </Toggle>
        <Toggle
            variant={'outline'} 
            onPressedChange={() => editor.chain().focus().setTextAlign('left').run()} 
            pressed={editor.isActive({ textAlign: 'left' })}
        >
          <AlignLeft className='h-4 w-4' />
        </Toggle>
        <Toggle
            variant={'outline'} 
            onPressedChange={() => editor.chain().focus().setTextAlign('center').run()} 
            pressed={editor.isActive({ textAlign: 'center' })}
        >
          <AlignCenter className='h-4 w-4'/>
        </Toggle>
        <Toggle
            variant={'outline'} 
            onPressedChange={() => editor.chain().focus().setTextAlign('right').run()} 
            pressed={editor.isActive({ textAlign: 'right' })}
        >
          <AlignRight className='h-4 w-4'/>
        </Toggle>
        </div>
    </div>
    )
}


export default Menubar