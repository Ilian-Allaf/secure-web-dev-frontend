<script>
    import {goto} from "$app/navigation";

    let email = "";
    let password = "";
    let errors = {};

    async function register(log) {
        const response = await fetch(`https://secure-web-dev-backend-mf4y.onrender.com/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: log.email,
                password: log.password,
            }),
        });
        return response.json()
    }

    const handleSubmit = () => {
        errors = {};

        register({ email, password })
            .then(() => {
                goto("../")
            })
            .catch(err => {
                errors.server = err;
                console.log("Username already taken")
            });

    }
</script>

    <h1>👤</h1>
    <label>Email</label>
    <input name="email" placeholder="name@example.com" bind:value={email} />

    <label>Password</label>
    <input name="password" type="password" bind:value={password} />

    <button on:click={() => {{handleSubmit()}}} type="submit">
        Sign Up
    </button>



<style>
    form {
        background: #fff;
        padding: 50px;
        width: 250px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
    }

    label {
        margin: 10px 0;
        align-self: flex-start;
        font-weight: 500;
    }

    input {
        border: none;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        transition: all 300ms ease-in-out;
        width: 100%;
    }

    input:focus {
        outline: 0;
        border-bottom: 1px solid #666;
    }

    button {
        margin-top: 20px;
        background: black;
        color: white;
        padding: 10px 0;
        width: 200px;
        border-radius: 25px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    button:hover {
        transform: translateY(-2.5px);
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
    }

    h1 {
        margin: 10px 20px 30px 20px;
        font-size: 40px;
    }

</style>



