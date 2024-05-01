import React from 'react'
import { MDXEditor } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { headingsPlugin } from '@mdxeditor/editor'
import { listsPlugin } from '@mdxeditor/editor'
import { quotePlugin } from '@mdxeditor/editor'
import { markdownShortcutPlugin } from '@mdxeditor/editor'



export default function NewEditor() {
  return (
    <div className='right'>
        <MDXEditor 
        
            markdown={'# Hello000 🔫🔫'} 
            plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
            contentEditableClassName="outline-none min-h-screen text-lg px-8 py-5 caret-pink-300 prose prose-invertprose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-[''] "
            />
    </div>
  )
}
