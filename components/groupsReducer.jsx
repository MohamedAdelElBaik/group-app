export default function reducer() {
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
      localStorage.setItem("groups", JSON.stringify(updatedGroups));

      return updatedGroups;

    case "deleteGroup":
      const id = action.payload.id;
      const newGroups = state.filter((group) => group.id !== id);
      localStorage.setItem("groups", JSON.stringify(newGroups));

      return newGroups;

    case "editGroup":
      const index = state.findIndex((group) => action.payload.id === group.id);

      if (index !== -1) {
        const updatedGroups = [...state];

        updatedGroups[index] = {
          ...updatedGroups[index],
          name: action.payload.name,
          description: action.payload.description,
        };

        localStorage.setItem("groups", JSON.stringify(updatedGroups));

        return updatedGroups;
      }
      return state;
    default:
      return state;
  }
}
