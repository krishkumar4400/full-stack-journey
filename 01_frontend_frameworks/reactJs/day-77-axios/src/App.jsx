import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    console.log(response);
    console.log(response.data);
    console.log(response.data[0].author, response.data[0].url);

    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );

    console.log(data[1].download_url);
  }

  const[images, setImages] = useState([]);
  const [todos, setTodos] = useState([]);

  const fetchImages = async() => {
    try {
        const {data} = await axios.get(
          "https://picsum.photos/v2/list"
        );

        console.log(data[0]);
        setImages(data);

    } catch (error) {
        console.log(error.message);
    }
  }

  const getAllTodos = async() => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data[0]);

    setTodos(data);
  }

  useEffect(() => {
    fetchImages();
  }, []);


  return (
    <div>
      <button onClick={getData}>click</button>
      <button onClick={fetchData}>load image</button>
      <button onClick={getAllTodos}>Get Todos</button>

      {images.map((image, index) => (
        <div key={index}>
          <img
            src="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            width={100}
            height={100}
          />
        </div>
      ))}

      {todos.map(function (item, index) {
        console.log(item);
        return (
          <h1 key={index}>
            Hello {item.name} {index + 1}
          </h1>
        );
      })}
    </div>
  );
};

export default App;

// free fake api or dummy api: json placeholder, lorem picsum, fakestore api
