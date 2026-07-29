# BlogHub

## Tech Stack

- React
- Express.js
- MongoDB + Mongoose
- Redis
- AWS S3
- Docker
- Github Actions
- Nginx
- AWS ECS
- JWT + Refresh Token
- Socket.IO
- Queues (Rabbit MQ)
- Microservices
- Kubernetes

## Features

1. Authentication

- Login
- Register
- Logout
- verify-email
- reset password
- forgot-password
- delete account
- profile avatar upload

1. Blog Management

- create blog
- edit blog
- delete blog
- publish / unpublish
- browse blog
- search by title
- comments
- likes
- save
- follow author

1. Author Dashboard

- Total Blogs
- Drafts
- Published
- Views
- Followers
- Comments
- Likes

1. Admin Dashboard

- Dashboard
- Total Users
- Blogs
- Comments
- Reports
- Categories
- Tags
- Analytics
- Recent Users
- Recent Blogs
- Recent Reports

1. Admin Moderation

- Approve Blog
- Reject Blog
- Delete Blog
- Suspend User
- Ban User
- Delete Comment

## Database & Schema Design

1. Users

```sql
id
username
email

avatarUrl

password

emailVerified
emailVerificationToken
emailVerificationExpiry

resetPasswordToken
resetPasswordTokenExpiry

role

refreshToken

createdAt
updatedAt
deletedAt
```

1. Blogs

```sql
id
authorId

coverImage

title
subtitle
description

category

isPublished

viewsCount
likesCount
commentsCount

createdAt
updatedAt
publishedAt
deletedAt

```

1. Comments

```sql
id
content
userId
blogId
likesCount
createAt
updatedAt
deletedAt
```

1. Likes

```sql
id
userId
blogId

createdAt
```

1. Follows

```sql
id
follower
followee

createAt
updatedAt
deletedAt
```
