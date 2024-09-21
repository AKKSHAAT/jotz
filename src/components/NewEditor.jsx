import React from 'react'
import { MDXEditor } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { headingsPlugin } from '@mdxeditor/editor'
import { listsPlugin } from '@mdxeditor/editor'
import { quotePlugin } from '@mdxeditor/editor'
import { markdownShortcutPlugin } from '@mdxeditor/editor'
import { linkPlugin } from '@mdxeditor/editor'
import { NoteTitle } from './NoteTitle'



export default function NewEditor() {
  return (
    <div className='right'>
    <NoteTitle />
    <hr />
    <MDXEditor
      markdown={'# heading 1-6 \n 1. lool\n 2. lol \n  - one\n - two\n \n  **ctr+b for bold** \n _ctrl+i for Italic_ \n '}
    //   onChange={handleAutoSaving}
    //   onBlur={handleBlur}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    /> 
    </div>
  )
}
