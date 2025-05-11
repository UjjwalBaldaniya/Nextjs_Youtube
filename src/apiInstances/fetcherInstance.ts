export const fetcherInstance = async <T = any>(
  endpoint: string,
  {
    method = "GET",
    body = null,
    headers = {},
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
  } = {}
): Promise<T> => {
  if (!endpoint || typeof endpoint !== "string") {
    throw new Error("Endpoint must be a valid string");
  }

  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const defaultHeaders = isFormData
    ? headers // Do not manually set Content-Type for FormData
    : {
        "Content-Type": "application/json",
        ...headers,
      };

  const options: RequestInit = {
    method,
    headers: defaultHeaders,
  };

  if (body instanceof FormData) {
    options.body = body;
    if (
      options.headers &&
      typeof options.headers === "object" &&
      !Array.isArray(options.headers)
    ) {
      delete (options.headers as Record<string, string>)["Content-Type"];
    }
  } else if (body) {
    options.body = JSON.stringify(body);
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`;
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    console.warn("NEXT_PUBLIC_BASE_URL is not set");
  }

  const response = await fetch(apiUrl, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  const apiResponse = await response.json();

  return apiResponse;
};
