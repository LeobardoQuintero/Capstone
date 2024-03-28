const API_URL = "https://fakestoreapi.com";



export async function login(email, password) {
const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email,
    password,
    }),
});
const data = await response.json();
console.log(data);

return data;
}
