import fetch from 'node-fetch';

export type FetchJsonParams = {
  url: string;
  method?: 'get' | 'post';
  data?: Record<string, string | number>;
};

export function fetchJson<T>({
  url,
  method = 'get',
  data,
}: FetchJsonParams): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    try {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        body: data ? JSON.stringify(data) : undefined,
      })
        .then((res) => res.json())
        .then((json) => resolve(json as T));
    } catch (e: unknown) {
      reject(e instanceof Error ? e.message : 'Unknown error');
    }
  });
}
