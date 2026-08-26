import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/notesApi";

const useCreateNote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNote,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  return {
    createNote: mutation.mutate,
    isCreating: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useCreateNote;