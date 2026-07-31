/**
 * DOM
 *
 * Event Bubbling (delegation)
 *
 */

const allReals = document.querySelector(".all-reels");

const reels = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "./reels/1.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "./reels/2.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "./reels/3.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "./reels/4.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "Code. Sleep. Repeat. That’s the cycle.",
    video: "./reels/5.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "./reels/6.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "You won’t believe this burger exists 🤯🍔",
    video: "./reels/7.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "./reels/8.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The most underrated smartphone of 2024 📱",
    video: "./reels/4.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "GSAP can literally change your career. Start today.",
    video: "./reels/5.mp4",

    userprofile:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function addData() {
  let sum = ``;
  reels.forEach(function (reel, index) {
    sum += `          <div class="reel">
            <video class="main-img" autoplay loop muted src=${reel.video}></video>
            <div class="bottom">
              <div class="user">
                <img class="avatar" src=${reel.userprofile} alt="">
                <h4>${reel.username}</h4>
                <button>${reel.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <div>
                <p class="caption">${reel.caption}</p>
              </div>
            </div>
            <div class="right">
            <div class='likes' id=${index}>
             ${reel.isLiked ? '<i class="ri-heart-3-fill"></i>' : '<i class="ri-heart-line"></i>'}
              <span>${reel.likeCount}</span>
            </div>
              <i  class="ri-chat-1-line"></i>
              <span>${reel.commentCount}</span>
              <i class="ri-share-forward-line"></i>
              <span>${reel.shareCount}</span>
              <img class="save-icon" src="image.png" alt="">
              <span>Save</span>
              <img class="save-icon" src="dots.png" alt="">
            </div>
          </div>`;
  });

  //   console.log(sum);

  allReals.innerHTML = sum;
}

addData();

allReals.addEventListener("click", function (e) {
  console.log(reels[e.target.id].likeCount);

  if (!reels[e.target.id].isLiked) {
    reels[e.target.id].isLiked = true;
    reels[e.target.id].likeCount++;
  } else {
    reels[e.target.id].isLiked = false;
    reels[e.target.id].likeCount--;
  }
  console.log(reels[e.target.id].likeCount);
  addData();
});
