import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../api/notesApi";

const useUpdateNote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateNote,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  return {
    updateNote: mutation.mutate,
    isUpdating: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useUpdateNote;