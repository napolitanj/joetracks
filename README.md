# **Joetracks.com — Full-Stack Portfolio**

A full-stack personal portfolio built with **React, TypeScript, and Cloudflare Workers**. This project serves as both my public site and a live demonstration of building a modern serverless application with custom APIs, authentication, content management, and media handling.

🌐 **Live Site:** https://joetracks.com

---

## **Overview**

This site showcases my work across software engineering, IT systems, and outdoor program design, with a custom-built backend powering secure content management. All blog posts, portfolio entries, images, and metadata are served from a fully serverless Cloudflare stack with fast global caching.

---

### **Frontend**

- React + TypeScript with modular component architecture
- Client-side routing for blog, portfolio, and project pages
- Fully responsive layout with dark mode (theme preference saved)
- Animated UI (scroll reveal, transitions, parallax header)
- Protected admin UI for creating and editing content

### **Backend**

- Cloudflare Workers for custom API routes
- D1 SQL database for blog posts, metadata, and portfolio content
- R2 object storage for uploaded images
- JWT-based authentication
- Hidden admin access with gate code + password

---

## **Tech Stack**

- **React, TypeScript, Vite**
- **Cloudflare Workers (serverless runtime)**
- **Cloudflare D1 (SQLite)**
- **Cloudflare R2 (object storage)**
- **React Router**
- **JWT Auth**

---

## **Development**

### **Frontend**

```bash
npm install
npm run dev
```
