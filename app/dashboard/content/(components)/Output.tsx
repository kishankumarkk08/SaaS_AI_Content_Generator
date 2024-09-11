import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const Output = () => {
  const editorRef: any = useRef()
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-bold'>Results</h2>
        <Button className='flex gap-2'><Copy width={15} height={15} /></Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Results"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default Output