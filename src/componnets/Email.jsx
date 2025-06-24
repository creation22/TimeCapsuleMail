import React, { useState, useRef } from 'react'
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  Type, Palette, Paperclip, Image, FileText, Calendar, Clock,
  Send, Save, ArrowLeft, Smile, Link, List, ListOrdered,
  Eye, EyeOff, Users, Mail, Phone, MapPin, Heart, Star, Gift
} from 'lucide-react'

const EmailComposer = ({ onBack }) => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    content: '',
    scheduleDate: '',
    scheduleTime: '',
    priority: 'normal',
    isPrivate: false
  })
  
  const [formatting, setFormatting] = useState({
    fontSize: '16',
    fontFamily: 'Arial',
    textColor: '#000000',
    bold: false,
    italic: false,
    underline: false,
    alignment: 'left'
  })
  
  const [attachments, setAttachments] = useState([])
  const [showPreview, setShowPreview] = useState(false)
  const [activeTab, setActiveTab] = useState('compose')
  
  const fileInputRef = useRef(null)
  const imageInputRef = useRef(null)
  const contentRef = useRef(null)

  const handleFileAttachment = (type) => {
    if (type === 'image') {
      imageInputRef.current.click()
    } else {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files)
    const newAttachments = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: type || file.type,
      file: file
    }))
    setAttachments(prev => [...prev, ...newAttachments])
  }

  const removeAttachment = (id) => {
    setAttachments(prev => prev.filter(att => att.id !== id))
  }

  const applyFormatting = (command, value = null) => {
    document.execCommand(command, false, value)
    if (command === 'bold') setFormatting(prev => ({ ...prev, bold: !prev.bold }))
    if (command === 'italic') setFormatting(prev => ({ ...prev, italic: !prev.italic }))
    if (command === 'underline') setFormatting(prev => ({ ...prev, underline: !prev.underline }))
  }

  const insertEmoji = (emoji) => {
    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      range.deleteContents()
      range.insertNode(document.createTextNode(emoji))
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const emailTemplates = [
    { id: 1, name: 'Birthday Wish', icon: Gift, content: 'Happy Birthday! 🎉 Wishing you all the best on your special day...' },
    { id: 2, name: 'Love Letter', icon: Heart, content: 'My dearest love, I wanted to take a moment to tell you how much you mean to me...' },
    { id: 3, name: 'Future Self', icon: Star, content: 'Dear Future Me, I hope you remember this moment and how determined you were...' },
    { id: 4, name: 'Congratulations', icon: Star, content: 'Congratulations on your amazing achievement! You worked so hard for this...' }
  ]

  const emojis = ['😊', '😍', '🥳', '💝', '🎉', '⭐', '💕', '🌟', '🎈', '🎂', '💐', '🌹', '🎁', '✨', '💌', '🥰']

  return (
    <div className=' relative z-10min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='bg-white rounded-t-2xl shadow-lg p-6 flex items-center justify-between border-b'>
          <div className='flex items-center gap-4'>
            <button 
              onClick={onBack}
              className='flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors'
            >
              <ArrowLeft className='w-5 h-5' />
              <span className='font-semibold'>Back to Home</span>
            </button>
            <div className='h-6 w-px bg-gray-300'></div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
              Create Time Capsule Email
            </h1>
          </div>
          
          <div className='flex items-center gap-3'>
            <button 
              onClick={() => setShowPreview(!showPreview)}
              className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
            >
              {showPreview ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
              <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
            </button>
            
            <button className='flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors'>
              <Save className='w-4 h-4' />
              <span>Save Draft</span>
            </button>
          </div>
        </div>

        <div className='flex'>
          {/* Main Composer */}
          <div className={`${showPreview ? 'w-1/2' : 'w-full'} bg-white shadow-lg transition-all duration-300`}>
            {/* Tabs */}
            <div className='flex border-b'>
              {[
                { id: 'compose', label: 'Compose', icon: Mail },
                { id: 'templates', label: 'Templates', icon: FileText },
                { id: 'schedule', label: 'Schedule', icon: Calendar }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                    activeTab === tab.id 
                      ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className='w-4 h-4' />
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'compose' && (
              <div className='p-6'>
                {/* Recipient Info */}
                <div className='space-y-4 mb-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        <Mail className='w-4 h-4 inline mr-2' />
                        Recipient Email *
                      </label>
                      <input
                        type='email'
                        value={emailData.to}
                        onChange={(e) => setEmailData(prev => ({ ...prev, to: e.target.value }))}
                        placeholder='Enter recipient email address'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        required
                      />
                    </div>
                    
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        <Star className='w-4 h-4 inline mr-2' />
                        Priority Level
                      </label>
                      <select
                        value={emailData.priority}
                        onChange={(e) => setEmailData(prev => ({ ...prev, priority: e.target.value }))}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                      >
                        <option value='low'>Low Priority</option>
                        <option value='normal'>Normal Priority</option>
                        <option value='high'>High Priority</option>
                        <option value='urgent'>Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Subject Line *
                    </label>
                    <input
                      type='text'
                      value={emailData.subject}
                      onChange={(e) => setEmailData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder='Enter your email subject'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                      required
                    />
                  </div>
                </div>

                {/* Formatting Toolbar */}
                <div className='border border-gray-300 rounded-t-lg p-4 bg-gray-50'>
                  <div className='flex flex-wrap items-center gap-2'>
                    {/* Font Controls */}
                    <div className='flex items-center gap-2 mr-4'>
                      <select
                        value={formatting.fontFamily}
                        onChange={(e) => {
                          setFormatting(prev => ({ ...prev, fontFamily: e.target.value }))
                          applyFormatting('fontName', e.target.value)
                        }}
                        className='px-3 py-1 border border-gray-300 rounded text-sm'
                      >
                        <option value='Arial'>Arial</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Times New Roman'>Times New Roman</option>
                        <option value='Helvetica'>Helvetica</option>
                        <option value='Courier New'>Courier New</option>
                      </select>
                      
                      <select
                        value={formatting.fontSize}
                        onChange={(e) => {
                          setFormatting(prev => ({ ...prev, fontSize: e.target.value }))
                          applyFormatting('fontSize', e.target.value)
                        }}
                        className='px-3 py-1 border border-gray-300 rounded text-sm'
                      >
                        <option value='12'>12px</option>
                        <option value='14'>14px</option>
                        <option value='16'>16px</option>
                        <option value='18'>18px</option>
                        <option value='20'>20px</option>
                        <option value='24'>24px</option>
                      </select>
                    </div>

                    <div className='h-6 w-px bg-gray-300'></div>

                    {/* Text Formatting */}
                    <div className='flex items-center gap-1'>
                      <button
                        onClick={() => applyFormatting('bold')}
                        className={`p-2 rounded transition-colors ${formatting.bold ? 'bg-purple-200 text-purple-700' : 'hover:bg-gray-200'}`}
                      >
                        <Bold className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => applyFormatting('italic')}
                        className={`p-2 rounded transition-colors ${formatting.italic ? 'bg-purple-200 text-purple-700' : 'hover:bg-gray-200'}`}
                      >
                        <Italic className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => applyFormatting('underline')}
                        className={`p-2 rounded transition-colors ${formatting.underline ? 'bg-purple-200 text-purple-700' : 'hover:bg-gray-200'}`}
                      >
                        <Underline className='w-4 h-4' />
                      </button>
                    </div>

                    <div className='h-6 w-px bg-gray-300'></div>

                    {/* Alignment */}
                    <div className='flex items-center gap-1'>
                      <button
                        onClick={() => applyFormatting('justifyLeft')}
                        className='p-2 rounded hover:bg-gray-200 transition-colors'
                      >
                        <AlignLeft className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => applyFormatting('justifyCenter')}
                        className='p-2 rounded hover:bg-gray-200 transition-colors'
                      >
                        <AlignCenter className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => applyFormatting('justifyRight')}
                        className='p-2 rounded hover:bg-gray-200 transition-colors'
                      >
                        <AlignRight className='w-4 h-4' />
                      </button>
                    </div>

                    <div className='h-6 w-px bg-gray-300'></div>

                    {/* Lists */}
                    <div className='flex items-center gap-1'>
                      <button
                        onClick={() => applyFormatting('insertUnorderedList')}
                        className='p-2 rounded hover:bg-gray-200 transition-colors'
                      >
                        <List className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => applyFormatting('insertOrderedList')}
                        className='p-2 rounded hover:bg-gray-200 transition-colors'
                      >
                        <ListOrdered className='w-4 h-4' />
                      </button>
                    </div>

                    <div className='h-6 w-px bg-gray-300'></div>

                    {/* Color Picker */}
                    <div className='flex items-center gap-2'>
                      <input
                        type='color'
                        value={formatting.textColor}
                        onChange={(e) => {
                          setFormatting(prev => ({ ...prev, textColor: e.target.value }))
                          applyFormatting('foreColor', e.target.value)
                        }}
                        className='w-8 h-8 border border-gray-300 rounded cursor-pointer'
                      />
                      <Palette className='w-4 h-4 text-gray-600' />
                    </div>
                  </div>

                  {/* Emoji Picker */}
                  <div className='mt-3 pt-3 border-t border-gray-200'>
                    <div className='flex items-center gap-2 flex-wrap'>
                      <Smile className='w-4 h-4 text-gray-600 mr-2' />
                      {emojis.map(emoji => (
                        <button
                          key={emoji}
                          onClick={() => insertEmoji(emoji)}
                          className='text-lg hover:bg-gray-200 p-1 rounded transition-colors'
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Editor */}
                <div
                  ref={contentRef}
                  contentEditable
                  className='min-h-96 p-6 border-l border-r border-b border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                  style={{ 
                    fontFamily: formatting.fontFamily,
                    fontSize: formatting.fontSize + 'px',
                    color: formatting.textColor
                  }}
                  onInput={(e) => setEmailData(prev => ({ ...prev, content: e.target.innerHTML }))}
                  placeholder='Write your heartfelt message here...'
                  suppressContentEditableWarning={true}
                />

                {/* Attachments Section */}
                <div className='mt-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <button
                      onClick={() => handleFileAttachment('file')}
                      className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                      <Paperclip className='w-4 h-4' />
                      Attach File
                    </button>
                    
                    <button
                      onClick={() => handleFileAttachment('image')}
                      className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                      <Image className='w-4 h-4' />
                      Add Image
                    </button>
                    
                    <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                      <Link className='w-4 h-4' />
                      Add Link
                    </button>
                  </div>

                  {/* File Inputs */}
                  <input
                    ref={fileInputRef}
                    type='file'
                    multiple
                    onChange={(e) => handleFileChange(e, 'file')}
                    className='hidden'
                    accept='.pdf,.doc,.docx,.txt,.xlsx,.ppt'
                  />
                  <input
                    ref={imageInputRef}
                    type='file'
                    multiple
                    onChange={(e) => handleFileChange(e, 'image')}
                    className='hidden'
                    accept='image/*'
                  />

                  {/* Attachment List */}
                  {attachments.length > 0 && (
                    <div className='space-y-2'>
                      <h4 className='font-semibold text-gray-700'>Attachments ({attachments.length})</h4>
                      {attachments.map(attachment => (
                        <div key={attachment.id} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg border'>
                          <div className='flex items-center gap-3'>
                            {attachment.type.startsWith('image/') ? (
                              <Image className='w-5 h-5 text-green-600' />
                            ) : (
                              <FileText className='w-5 h-5 text-blue-600' />
                            )}
                            <div>
                              <div className='font-medium text-gray-900'>{attachment.name}</div>
                              <div className='text-sm text-gray-500'>{formatFileSize(attachment.size)}</div>
                            </div>
                          </div>
                          <button
                            onClick={() => removeAttachment(attachment.id)}
                            className='text-red-500 hover:text-red-700 transition-colors'
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className='p-6'>
                <h3 className='text-lg font-bold mb-4'>Choose a Template</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {emailTemplates.map(template => (
                    <div
                      key={template.id}
                      className='border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all'
                      onClick={() => {
                        if (contentRef.current) {
                          contentRef.current.innerHTML = template.content
                          setEmailData(prev => ({ ...prev, content: template.content }))
                        }
                        setActiveTab('compose')
                      }}
                    >
                      <div className='flex items-center gap-3 mb-2'>
                        <template.icon className='w-5 h-5 text-purple-600' />
                        <h4 className='font-semibold'>{template.name}</h4>
                      </div>
                      <p className='text-gray-600 text-sm line-clamp-2'>{template.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className='p-6'>
                <h3 className='text-lg font-bold mb-4'>Schedule Delivery</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      <Calendar className='w-4 h-4 inline mr-2' />
                      Delivery Date
                    </label>
                    <input
                      type='date'
                      value={emailData.scheduleDate}
                      onChange={(e) => setEmailData(prev => ({ ...prev, scheduleDate: e.target.value }))}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      <Clock className='w-4 h-4 inline mr-2' />
                      Delivery Time
                    </label>
                    <input
                      type='time'
                      value={emailData.scheduleTime}
                      onChange={(e) => setEmailData(prev => ({ ...prev, scheduleTime: e.target.value }))}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    />
                  </div>
                </div>
                
                <div className='mt-6'>
                  <label className='flex items-center gap-3'>
                    <input
                      type='checkbox'
                      checked={emailData.isPrivate}
                      onChange={(e) => setEmailData(prev => ({ ...prev, isPrivate: e.target.checked }))}
                      className='w-4 h-4 text-purple-600 rounded focus:ring-purple-500'
                    />
                    <span className='text-gray-700'>Mark as private (encrypted storage)</span>
                  </label>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className='p-6 bg-gray-50 rounded-b-2xl'>
              <button className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'>
                <Send className='w-5 h-5' />
                Schedule Time Capsule Email
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className='w-1/2 bg-white shadow-lg border-l'>
              <div className='p-6 border-b bg-gray-50'>
                <h3 className='text-lg font-bold text-gray-800'>Email Preview</h3>
              </div>
              <div className='p-6'>
                <div className='border border-gray-200 rounded-lg'>
                  <div className='p-4 bg-gray-50 border-b'>
                    <div className='space-y-2 text-sm'>
                      <div><strong>To:</strong> {emailData.to || 'recipient@example.com'}</div>
                      <div><strong>Subject:</strong> {emailData.subject || 'Your Time Capsule Message'}</div>
                      <div><strong>Scheduled:</strong> {emailData.scheduleDate && emailData.scheduleTime ? 
                        `${emailData.scheduleDate} at ${emailData.scheduleTime}` : 'Not scheduled'}</div>
                    </div>
                  </div>
                  <div className='p-4'>
                    <div 
                      className='prose max-w-none'
                      dangerouslySetInnerHTML={{ __html: emailData.content || 'Your message content will appear here...' }}
                    />
                    {attachments.length > 0 && (
                      <div className='mt-4 pt-4 border-t'>
                        <div className='text-sm font-semibold text-gray-700 mb-2'>Attachments:</div>
                        {attachments.map(att => (
                          <div key={att.id} className='text-sm text-gray-600'>📎 {att.name}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailComposer