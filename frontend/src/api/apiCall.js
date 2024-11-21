const apiCall = async ({ endpoint, method = "GET", requestData, query }) => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const headers = {
    "Content-Type": "application/json",
  };

  const queryString = query ? `?${new URLSearchParams(query).toString()}` : "";

  const fullUrl = `${BASE_URL}${endpoint}${queryString}`;

  const response = await fetch(fullUrl, {
    headers,
    method,
    body: method !== "GET" ? JSON.stringify(requestData) : undefined,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default apiCall;
