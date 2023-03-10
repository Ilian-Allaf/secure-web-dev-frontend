import jwtStore from "./store.js";
import { goto } from '$app/navigation';

let jwtItem;
jwtStore.subscribe((data) =>{
    jwtItem = data;
});
export async function getAllLocations() {
    try {
        const response = await fetch(`https://secure-web-dev-backend-mf4y.onrender.com/locations`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtItem}`,
            },
        });
        return await response.json();
    }
    catch (error) {
        goto("./")
        console.error(error);
    }
}
