import React from "react";

export default function Header({ title }) {
  return (
    <header className="table table-dark text-center">
      <h1>{title}</h1>
    </header>
  );
}
