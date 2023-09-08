import { useState } from 'react';
import viteLogo from '/vite.svg';

function Header(course) {
  return <h1>{course.course}</h1>;
}

function Content(content) {
  return (
    <div>
      <Part
        part={content.content[0].part}
        exercises={content.content[0].exercises}
      />
      <Part
        part={content.content[1].part}
        exercises={content.content[1].exercises}
      />
      <Part
        part={content.content[2].part}
        exercises={content.content[2].exercises}
      />
    </div>
  );
}

function Total(total) {
  return <p>Number of exercises {total.total}</p>;
}

function Part(content) {
  console.log(content);
  return (
    <p>
      {content.part} {content.exercises}
    </p>
  );
}

function App() {
  const course = 'Half Stack application development';

  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />

      <Total
        total={
          content[0].exercises + content[1].exercises + content[2].exercises
        }
      />
    </div>
  );
}

export default App;
