export type ClientRestResponse<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export class Client {
  async rest<T>(
    route: string,
    body?: Record<string, unknown>
  ): Promise<ClientRestResponse<T>> {
    const encodedRoute = encodeURI(route);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/cms/rest?route=${encodedRoute}`
    );
    const data = await res.json();
    return data;
  }
}

export const client = new Client();
