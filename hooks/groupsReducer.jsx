"use client";

export default function reducer(state, action) {
  switch (action.type) {
    case "addGroup":
      const idCreated = Date.now();
      const createAt = new Date();
      const newGroup = {
        id: idCreated,
        name: action.payload.name,
        description: action.payload.description,
        createAt,
      };

      const updatedGroups = [...state, newGroup];
      if (localStorage) {
        localStorage.setItem("groups", JSON.stringify(updatedGroups));
        return updatedGroups;
      }
      return state;

    case "deleteGroup":
      const id = action.payload.id;
      const newGroups = state.filter((group) => group.id !== id);
      if (localStorage) {
        localStorage.setItem("groups", JSON.stringify(newGroups));

        return newGroups;
      }
      return state;

    case "editGroup":
      const index = state.findIndex((group) => action.payload.id === group.id);

      if (index !== -1) {
        const updatedGroups = [...state];

        updatedGroups[index] = {
          ...updatedGroups[index],
          name: action.payload.name,
          description: action.payload.description,
        };
        if (localStorage) {
          lo0calStorage.setItem("groups", JSON.stringify(updatedGroups));
          return updatedGroups;
        }
        return state;
      }
      return state;
    default:
      return state;
  }
}
