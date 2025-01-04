import React from 'react';

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`position-fixed top-0 end-0 p-3`}
        style={{
          zIndex: 1055, // Ensures it's above other elements
          maxWidth: "400px", // You can adjust this based on your preference
        }}
      >
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>:
          {` ${props.alert.msg}`}
         
        </div>
      </div>
    )
  );
}
