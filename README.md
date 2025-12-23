#  Task Dashboard

A **Task Dashboard** built with **React, TypeScript and Tailwind CSS**, focused on clean UI, smooth animations and a delightful user experience.

This project showcases real-world frontend patterns such as state management, persistence, filtering, animations and UX micro-interactions.

---

##  Features

-  Create tasks with a clean input flow  
-  Mark tasks as completed with smooth animations  
-  Confetti celebration when completing a task  
-  Filter tasks by:
  - All
  - Pending
  - Completed
-  Live task counter (total / pending)
-  Persistent state using `localStorage`
-  Elegant empty state for better UX
-  Smooth animations with Framer Motion
-  Soft pink color palette for a friendly look

---

##  Why this project?

This project was built to demonstrate:

- Component-driven architecture
- Separation of UI state vs domain state
- Clean TypeScript usage with strict settings
- Real UX decisions (empty states, feedback, animations)
- Correct handling of side effects (confetti logic handled outside UI components)

---

##  Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **LocalStorage**

---

## 📂 Project Structure

```text
src/
├─ components/
│  ├─ TaskInput.tsx
│  ├─ TaskList.tsx
│  ├─ TaskItem.tsx
│  ├─ TaskFilters.tsx
│  ├─ TaskCounter.tsx
│  └─ EmptyState.tsx
│
├─ hooks/
│  └─ useTasks.ts
│
├─ types/
│  ├─ task.ts
│  └─ filter.ts
│
├─ App.tsx
├─ main.tsx
└─ index.css

```

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/brizavda/task-dashboard.git
cd task-dashboard
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

