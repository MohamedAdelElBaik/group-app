"use client";

export default function reducer(state, action) {
  switch (action.type) {
    case "add":
      const idCreated = Date.now();
      const createAt = new Date();
      const newPost = {
        id: idCreated,
        title: action.payload.title,
        content: action.payload.content,
        createAt,
      };

      const updatedPosts = [...state, newPost];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));

      return updatedPosts;

    case "delete":
      const id = action.payload.id;
      const newPosts = state.filter((group) => group.id !== id);
      localStorage.setItem("posts", JSON.stringify(newPosts));

      return newPosts;

    case "edit":
      const index = state.findIndex((group) => action.payload.id === group.id);

      if (index !== -1) {
        const updatedPosts = [...state];

        updatedPosts[index] = {
          ...updatedPosts[index],
          title: action.payload.title,
          content: action.payload.content,
        };

        localStorage.setItem("posts", JSON.stringify(updatedPosts));

        return updatedPosts;
      }
      return state;
    default:
      return state;
  }
}
