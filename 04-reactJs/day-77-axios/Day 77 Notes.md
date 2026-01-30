### 1. CSR – Client Side Rendering

**Client Side Rendering (CSR)** is a rendering approach where the **browser (client)** is responsible for rendering the UI.

The server sends a **minimal HTML file** along with JavaScript.

After the JavaScript loads, React builds the UI inside the browser.

### How CSR Works (Step-by-Step)

1. User requests a page.
2. Server returns:
    - An almost empty `index.html`
    - JavaScript bundle (React code)
3. Browser downloads JavaScript.
4. React executes in the browser.
5. API calls are made from the browser.
6. UI is rendered dynamically.

### Advantages of CSR

- Excellent for **highly interactive apps**
- Smooth client-side navigation
- Lower server load
- Ideal for dashboards, admin panels, SPAs

### Disadvantages of CSR

- Poor SEO by default
- Slower first paint
- Requires JavaScript to be enabled
- Blank screen until JS loads

### Example Use Cases

- Admin dashboards
- Social media apps
- Web applications requiring heavy interactivity

---

## 2. SSR – Server Side Rendering

**Server Side Rendering (SSR)** means the **server generates the complete HTML** for each request and sends it to the browser.

The browser immediately displays content without waiting for JavaScript execution.

### How SSR Works (Step-by-Step)

1. User requests a page.
2. Server:
    - Fetches required data
    - Renders React components on the server
3. Server sends **fully rendered HTML**
4. Browser displays content instantly
5. JavaScript hydrates the page for interactivity

### Advantages of SSR

- Excellent SEO
- Faster first contentful paint
- Better performance on slow devices
- Suitable for content-heavy websites

### Disadvantages of SSR

- Higher server load
- More complex architecture
- Slightly slower page transitions
- Requires Node.js support

### Example Use Cases

- Blogs
- E-commerce websites
- Marketing websites
- News platforms

3. CSR vs SSR (Quick Comparison)

| Feature            | CSR      | SSR              |
| ------------------ | -------- | ---------------- |
| Rendering Location | Browser  | Server           |
| Initial Load       | Slower   | Faster           |
| SEO                | Poor     | Excellent        |
| Server Load        | Low      | High             |
| Interactivity      | High     | Moderate         |
| Best For           | Web apps | Content websites |


4. Axios – HTTP Client Library

**Axios** is a **promise-based HTTP client** used to make API requests from:

- Browser
- Node.js

It simplifies API communication compared to native `fetch`.

### Why We Use Axios

- Automatic JSON parsing
- Cleaner syntax
- Built-in error handling
- Supports request/response interceptors
- Supports cancellation and timeouts

### Axios vs Fetch

- Fetch requires manual JSON conversion
- Axios returns parsed data directly
- Axios throws errors for HTTP status codes
- Fetch requires extra configuration for errors

---

## 5. Axios with React

### Where Axios is Used in React

- Inside lifecycle logic
- Inside hooks (`useEffect`)
- On user actions (button click, form submit)

---

## 6. Axios GET Request in React

```jsx
import axiosfrom"axios";
import { useEffect, useState }from"react";

constApp = () => {
const [users, setUsers] =useState([]);

useEffect(() => {
    axios.get("https://api.example.com/users")
      .then((response) => {
setUsers(response.data);
      })
      .catch((error) => {
console.error(error);
      });
  }, []);

return (
<div>
      {users.map((user) => (
<pkey={user.id}>{user.name}</p>
      ))}
</div>
  );
};

exportdefaultApp;

```

### Explanation

- `axios.get()` sends GET request
- `response.data` contains server data
- `useEffect` prevents infinite calls
- `useState` triggers re-render

## 7. Axios Error Handling

```jsx
axios.get("/api/data")
  .then(res =>console.log(res.data))
  .catch(err => {
if (err.response) {
console.log("Server Error:", err.response.status);
    }else {
console.log("Network Error");
    }
  });

```

### Types of Errors

- Network errors
- Server errors (4xx, 5xx)
- Timeout errors