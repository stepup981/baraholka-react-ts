type TMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface IRequestParams {
  endpoint: string;
  method?: TMethod;
  includeQuery?: boolean;
  data?: any;
}
