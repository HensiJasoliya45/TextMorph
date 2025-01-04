import React from 'react';

export default function About(props) {
  const darkModeStyles = {
    backgroundColor: '#151010',
    color: 'white',
  };

  const lightModeStyles = {
    backgroundColor: 'white',
    color: 'black',
  
  };

  const myStyles = props.mode === 'dark' ? darkModeStyles : lightModeStyles;
  const primaryColor = props.mode === 'dark' ? '#ff6347' : '#007bff';
  return (
    <div className="container my-3" style={myStyles}>
      <div className="row mb-3">
        <div className="col-12">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            TextMorph is a powerful text manipulation tool that helps users
            convert their text in various formats, clear unnecessary spaces, 
            and perform actions like converting to uppercase, lowercase, and 
            copying text to the clipboard.
          </p>

          <h3 className="mb-3">Features</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow" style={myStyles}>
                <div className="card-body shadow text-center">
                  <i className="fas fa-arrow-up" style={{ fontSize: '50px', color: primaryColor  }}></i>
                  <h5 className="card-title">Uppercase</h5>
                  <p className="card-text">
                    Convert text to uppercase with a single click.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow" style={myStyles}>
                <div className="card-body shadow text-center">
                  <i className="fas fa-arrow-down" style={{ fontSize: '50px', color: primaryColor }}></i>
                  <h5 className="card-title">Lowercase</h5>
                  <p className="card-text">
                    Convert text to lowercase with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow" style={myStyles}>
                <div className="card-body shadow text-center">
                  <i className="fas fa-eraser" style={{ fontSize: '50px', color:primaryColor }}></i>
                  <h5 className="card-title">Remove Spaces</h5>
                  <p className="card-text">
                    Clear unnecessary spaces from your text.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-3">Additional Features</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card shadow" style={myStyles}>
                <div className="card-body shadow text-center">
                  <i className="fas fa-copy" style={{ fontSize: '50px', color:primaryColor}}></i>
                  <h5 className="card-title">Copy to Clipboard</h5>
                  <p className="card-text">
                    Easily copy text to your clipboard with a click.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card shadow" style={myStyles}>
                <div className="card-body shadow text-center">
                  <i className="fas fa-trash-alt" style={{ fontSize: '50px', color:primaryColor }}></i>
                  <h5 className="card-title">Clear Text</h5>
                  <p className="card-text">
                    Clear the text box and start fresh in one click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-4">About the Developer</h3>
          <p>
            This application is built with React.js and aims to provide users with a simple interface to manipulate text quickly and efficiently. It was created as a part of a project to enhance web development skills.
          </p>
        </div>
      </div>
    </div>
  );
}
