import React from 'react'

export default function FetchNews(props) {
  return (
    <div
    className="container mt-4"
    style={{ color: props.mode === "dark" ? "white" : "black" }}
  >
      <h1 className="text-center">Welcome to the text converter app</h1>
    </div>
  )
}
