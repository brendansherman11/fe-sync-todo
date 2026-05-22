import * as React from "react";
import { useSignIn } from "../hooks/api/use-sign-in";

export function SignIn() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { mutate, isPending, isSuccess, isError } = useSignIn();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={isPending}>
                {isPending ? "Signing in..." : "Sign In"}
            </button>

            {isSuccess && <p>Signed in!</p>}
            {isError && <p>Invalid credentials.</p>}
        </form>
    );
}
