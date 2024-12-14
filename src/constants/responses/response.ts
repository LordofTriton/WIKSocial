import { HttpStatusCode } from 'axios';
import { PaginationData } from '../models/pagination.models';

export class WikResponse<K> {
  success: boolean;
  code: number;
  pagination?: PaginationData | null;
  data: K;
  status: string;
  message: string;

  static Custom<T>(data: { success?: boolean, code?: number, data?: T; status?: string; message?: string }): WikResponse<T> {
    return {
      success: data.success ?? true,
      code: data.code ?? HttpStatusCode.Ok,
      data: data.data ?? null,
      status: data.status ?? "SUCCESS",
      message: data.message ?? "Completed successfully."
    }
  }

  static Success<T>(data: { data?: T; status?: string; message?: string }): WikResponse<T> {
    return {
      success: true,
      code: HttpStatusCode.Ok,
      data: data.data ?? null,
      status: data.status ?? "SUCCESS",
      message: data.message ?? "Completed successfully."
    }
  }

  static Failure(data: { data?: any; error?: any }): WikResponse<any> {
    return {
      success: false,
      code: HttpStatusCode.BadRequest,
      data: data.data ?? null,
      status: "FAILED",
      message: data.error ?? "An error occured during request execution."
    }
  }

  static Error<T>(data: { data?: T; error?: any }): WikResponse<T> {
    return {
      success: false,
      code: HttpStatusCode.InternalServerError,
      data: data.data ?? null,
      status: "FAILED",
      message: data.error ?? "An error occured during request execution."
    }
  }

  static Create<T>(data: { data?: T; message?: string }): WikResponse<T> {
    return {
      success: true,
      code: HttpStatusCode.Created,
      data: data.data ?? null,
      status: "SUCCESS",
      message: data.message ?? "Created successfully."
    }
  }

  static Update<T>(data: { data?: T; message?: string }): WikResponse<T> {
    return {
      success: true,
      code: HttpStatusCode.Ok,
      data: data.data ?? null,
      status: "SUCCESS",
      message: data.message ?? "Updated successfully."
    }
  }

  static Fetch<T>(data: { data?: T[]; message?: string; pagination?: Partial<PaginationData> }): WikResponse<T[]> {
    return {
      success: true,
      code: HttpStatusCode.Ok,
      pagination: data.pagination ? {
        page: data.pagination.page ?? 1,
        pageSize: data.pagination.pageSize ?? 1,
        totalItems: data.pagination.totalItems ?? 0,
        totalPages: data.pagination.totalItems && data.pagination.pageSize ? Math.ceil(data.pagination.totalItems / data.pagination.pageSize) : 1
      } : null,
      data: data.data ?? null,
      status: "SUCCESS",
      message: data.message ?? "Fetched successfully."
    }
  }

  static Delete<T>(data: { data?: T; message?: string }): WikResponse<T> {
    return {
      success: true,
      code: HttpStatusCode.Ok,
      data: data.data ?? null,
      status: "SUCCESS",
      message: data.message ?? "Deleted successfully."
    }
  }

  static Unauthorised(message: string): WikResponse<any> {
    return {
      success: false,
      code: HttpStatusCode.Unauthorized,
      data: null,
      status: "UNAUTHORISED",
      message: message ?? "Unauthorised request."
    }
  }
}
