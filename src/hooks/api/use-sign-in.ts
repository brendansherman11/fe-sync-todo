import { useMutation, useQueryClient } from "@tanstack/react-query";

const signIn = async ({ username, password }: { username: string; password: string }) => {
    const response = await fetch("https://consensusadvertising.com/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Failed to sign in");
    }

    return response.json();
};

export const useSignIn = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: signIn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cars"] });
        },
    });

    return mutation;
};
