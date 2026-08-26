import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../api/notesApi";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteNote,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  return {
    deleteNote: mutation.mutate,
    isDeleting: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useDeleteNote;