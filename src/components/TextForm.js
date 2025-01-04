import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.trim()) {
      const upperText = text.toUpperCase();
      setText(upperText);
      props.showAlert("Converted to uppercase!", "success");
    } else {
      props.showAlert("Please enter some text first.", "warning");
    }
  };

  const handleLoClick = () => {
    if (text.trim()) {
      const lowerText = text.toLowerCase();
      setText(lowerText);
      props.showAlert("Converted to lowercase!", "success");
    } else {
      props.showAlert("Please enter some text first.", "warning");
    }
  };

  const handleClearClick = () => {
    if (text.trim()) {
      setText("");
      props.showAlert("Text cleared!", "success");
    } else {
      props.showAlert("Nothing to clear.", "warning");
    }
  };

  const handleCopyClick = () => {
    if (text.trim()) {
      var textArea = document.getElementById("myBox");
      textArea.select();
      navigator.clipboard.writeText(textArea.value);
      props.showAlert("Copied to Clipboard!", "success");
    } else {
      props.showAlert("No text to copy.", "warning");
    }
  };

  const handleExtraSpacesClick = () => {
    if (text.trim()) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    } else {
      props.showAlert("No extra spaces to remove.", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <style>
        {`
          #myBox::placeholder {
            color: ${props.mode === "dark" ? "white" : "black"};
          }
        `}
      </style>

      <div className="container-fluid my-4">
        <h2
          className="text-center mb-4"
          style={{ color: props.mode === "dark" ? "#f8f9fa" : "#212529" }}
        >
          {props.heading}
        </h2>

        <textarea
          className={`form-control shadow-sm mb-3 ${
            props.mode === "dark" ? "placeholder-dark" : "placeholder-light"
          }`}
          id="myBox"
          value={text}
          placeholder="Enter your text here..."
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
            color: props.mode === "dark" ? "#f8f9fa" : "#212529",
            border: `2px solid ${props.mode === "dark" ? "#adb5bd" : "#ced4da"}`,
          }}
          rows="8"
        ></textarea>

        <div className="d-flex flex-wrap justify-content-center">
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            <i className="fas fa-arrow-up me-2"></i> Convert To UpperCase
          </button>
          <button className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>
            <i className="fas fa-arrow-down me-2"></i> Convert To LowerCase
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
            <i className="fas fa-eraser me-2"></i> Clear Text
          </button>
          <button className="btn btn-success mx-2 my-2" onClick={handleCopyClick}>
            <i className="fas fa-copy me-2"></i> Copy Text
          </button>
          <button className="btn btn-warning mx-2 my-2" onClick={handleExtraSpacesClick}>
            <i className="fas fa-compress me-2"></i> Remove Extra Spaces
          </button>
        </div>

        <div className="mt-4">
          <div className="row">
            <div className="col-12 col-md-4">
              {/* Card for Text Summary */}
              <div
                className="card shadow-sm mb-4"
                style={{
                  backgroundColor: props.mode === "dark" ? "#495057" : "#f8f9fa",
                }}
              >
                <div
                  className="card-body shadow"
                  style={{
                    color: props.mode === "dark" ? "#f8f9fa" : "#212529",
                  }}
                >
                  <h3 className="card-title">Your Text Summary</h3>
                  <p className="card-text">
                    <span className="badge bg-info text-dark">
                      {text.split(" ").filter((word) => word !== "").length} Words
                    </span>
                    <span className="badge bg-success text-light ms-2">
                      {text.length} Characters
                    </span>
                  </p>
                  <p>
                    Estimated Reading Time:{" "}
                    <strong>
                      {(
                        0.008 *
                        text.split(" ").filter((word) => word !== "").length
                      ).toFixed(2)}{" "}
                      minutes
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              {/* Card for Preview */}
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: props.mode === "dark" ? "#495057" : "#f8f9fa",
                }}
              >
                <div
                  className="card-body shadow"
                  style={{
                    color: props.mode === "dark" ? "#f8f9fa" : "#212529",
                  }}
                >
                  <h3 className="card-title">Preview</h3>
                  <p>
                    {text.length > 0
                      ? text
                      : "Enter text above to see the preview here..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
