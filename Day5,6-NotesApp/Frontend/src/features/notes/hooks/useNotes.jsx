import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../api/notesApi";

const useNotes = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return {
    notes: data?.notes || [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useNotes;