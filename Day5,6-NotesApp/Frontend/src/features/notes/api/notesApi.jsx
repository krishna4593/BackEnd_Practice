import api from "../../../services/api";

export const getNotes = async ()=>{
    try{
        const response = await api.get("/getNotes")
        return response.data;
    }catch(e){
        console.error("Error fetching notes:", e);
        throw e; // Rethrow the error to be handled by the caller
    }
}
export const createNote = async (noteData)=>{
    try{
        const response = await api.post("/create", noteData)
        return response.data;
    }catch(e){
        console.error("Error adding note:", e);
        throw e; // Rethrow the error to be handled by the caller
    }
}
export const updateNote = async ({ id, noteData }) => {
  try {
    const response = await api.put(`/${id}`, noteData);

    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

export const deleteNote = async (noteId)=>{
    try{
        const response = await api.delete(`/${noteId}`)
        return response.data;
    }catch(e){
        console.error("Error deleting note:", e);
        throw e; // Rethrow the error to be handled by the caller
    }
}
