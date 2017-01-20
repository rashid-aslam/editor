import React from 'react'
import ReactDOM from 'react-dom'

import Editor, { Editable } from 'ory-editor-core'
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import slate from 'ory-editor-plugins-slate'
import spacer from 'ory-editor-plugins-spacer'
import divider from 'ory-editor-plugins-divider'
import image from 'ory-editor-plugins-image'
import video from 'ory-editor-plugins-video'
import spoiler from 'ory-editor-plugins-spoiler'
require('react-tap-event-plugin')()

import 'ory-editor-core/lib/index.css'
import 'ory-editor-ui/lib/index.css'

import 'ory-editor-plugins-video/lib/index.css'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-spacer/lib/index.css'
import 'ory-editor-plugins-image/lib/index.css'
import 'ory-editor-plugins-spoiler/lib/index.css'

import content from './content.js'
import './styles.css'

const editor = new Editor({
  plugins: {
    content: [
      slate(),
      spacer,
      image,
      video,
      divider
    ],
    layout: [
      spoiler({ defaultPlugin: slate() })
    ]
  },
  editables: content,
})

const elements = document.querySelectorAll('.editable')
for (const element of elements) {
  ReactDOM.render((
    <Editable
      editor={editor}
      id={element.dataset.id}
      // onChange={(state) => console.log(state)}
    />
  ), element)
}

ReactDOM.render((
  <div>
    <Trash editor={editor} />
    <DisplayModeToggle editor={editor} />
    <Toolbar editor={editor} />
  </div>
), document.getElementById('controls'))