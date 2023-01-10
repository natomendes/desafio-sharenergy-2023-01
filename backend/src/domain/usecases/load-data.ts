type LoadOptions = {
  include?: string
  results?: string
  seed?: string
  page?: string
}

export interface LoadData<T> {
  load (options?: LoadOptions): Promise<T[]>
}
