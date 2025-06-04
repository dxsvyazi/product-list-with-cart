export const postData = <T extends { [name: string]: any }>(
  endpoint: string,
  data: T
) =>
  fetch(`/auth/${endpoint}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });

export const authRefresh = (): Promise<{ token: string }> =>
  fetch('/auth/refresh').then((response) => response.json());
