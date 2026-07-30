/**
 * DOM
 */

let users = [
  {
    avatar:
      "https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    name: "Aarav Sharma",
    profession: "Software Engineer",
    description:
      "Full-stack developer specializing in MERN stack and cloud-native applications.",
    tags: ["JavaScript", "React", "Node.js", "AWS", "DevOps"],
  },
  {
    avatar:
      "https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0png",
    name: "Meera Kapoor",
    profession: "UI/UX Designer",
    description:
      "Creative designer focused on building intuitive and aesthetic user interfaces.",
    tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Branding"],
  },
  {
    avatar:
      "https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0png",
    name: "Rohan Verma",
    profession: "Data Scientist",
    description:
      "Passionate about turning raw data into actionable insights using machine learning.",
    tags: ["Python", "TensorFlow", "SQL", "Data Visualization", "AI"],
  },
  {
    avatar:
      "https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0png",
    name: "Priya Nair",
    profession: "Entrepreneur",
    description:
      "Founder of a sustainable fashion startup, blending creativity with eco-consciousness.",
    tags: ["Startup", "Sustainability", "Fashion", "Leadership", "Marketing"],
  },
  {
    avatar:
      "https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0png",
    name: "Ankit Joshi",
    profession: "Educator",
    description:
      "Dedicated teacher helping students master computer science fundamentals.",
    tags: [
      "Education",
      "Computer Science",
      "Mentorship",
      "Problem Solving",
      "Algorithms",
    ],
  },
];
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

let sum = ``;

users.forEach(function (user, index) {
  sum += `      <div class="card">
        <div id="img-container">
          <img src=${user.avatar} alt="" />
        </div>
        <h2>${user.name}</h2>
        <h3>${user.profession}</h3>
        <div id="description">
          <p>
            ${user.description}
          </p>
        </div>
        <div id="tags">
          <span>tag1</span>
        </div>
      </div>`;
});

let main = document.querySelector("main");
main.innerHTML = sum;
