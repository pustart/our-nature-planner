import { API_URL } from '../constants/common.constants';
import { HttpMethods } from '../constants/httpMethods.enum';

export async function request<Result>(
  url: string,
  method: HttpMethods = HttpMethods.GET,
  params: Record<string, any> = {}
): Promise<Result> {

  const response = await fetch(`${API_URL}api/${url}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw Error(response.statusText);
  const res = await response.json();
  return res.data;
}
