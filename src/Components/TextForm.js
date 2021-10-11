import React, { useState } from 'react'
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Uppercase!', 'success')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lowercase!', 'success')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Copied to Clipboard!', 'success')
  }

  const handleTitleClick = () => {
    let newText = text
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')

    setText(newText)
    props.showAlert('Converted to Titlecase!', 'success')
  }

  const handleSenClick = () => {
    let newText = text[0].toUpperCase() + text.slice(1).toLowerCase()
    setText(newText)
    props.showAlert('Converted to Sentencecase!', 'success')
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed!', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert('Text Cleared!', 'success')
  }

  const [text, setText] = useState('')
  return (
    <>
      <div className='mb-3'>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          {props.heading}
        </h1>
        <h5 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          Try TextUtils - Word Counter, Character Counter, Remove extra spaces,
          Copy Text, Convert text from Uppercase to lowercase and lowercase to
          Uppercase, Titlecase and Sentence Case.
        </h5>
        <textarea
          className='form-control'
          id='myBox'
          rows='10'
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        ></textarea>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleUpClick}
        >
          Upper Case
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleLoClick}
        >
          Lover Case
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleTitleClick}
        >
          Title Case
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleSenClick}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          className='btn btn-primary my-1 mx-1'
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className='container'>
        <div className='row'>
          <div
            className='output  col-sm-6 col-md-6 col-lg-6'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <p>
              Characters: <span>{text.length}</span>
            </p>
          </div>
          <div
            className='output col-sm-6 col-md-6 col-lg-6'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <p>
              Words:
              <span>
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0
                  }).length
                }
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div
            className='output  col-sm-6 col-md-6 col-lg-6'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <p>
              Sentences:
              <span>{text.split(/[.|!|?]+/g).length - 1}</span>
            </p>
          </div>
          <div
            className='output col-sm-6 col-md-6 col-lg-6'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <p>
              Paragraphs:
              <span>
                {
                  text
                    .replace(/\n$/gm, '')
                    .split(/\n/)
                    .filter((element) => {
                      return element.length !== 0
                    }).length
                }
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div
            className='output  col-sm-6 col-md-6 col-lg-6'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <p>
              Reading Time:
              <span>
                {(
                  text.split(' ').filter((element) => {
                    return element.length !== 0
                  }).length * 0.008
                ).toFixed(2) <= 0.99
                  ? (
                      text.split(' ').filter((element) => {
                        return element.length !== 0
                      }).length * 0.008
                    ).toFixed(2) + 's'
                  : (
                      text.split(' ').filter((element) => {
                        return element.length !== 0
                      }).length * 0.008
                    ).toFixed(2) + 'm'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div
            className='col-sm-12 col-md-12 col-lg-12'
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <h4>
              Preview: <h6>{text.length > 0 ? text : 'Nothing to preview!'}</h6>
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}
