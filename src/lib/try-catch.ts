export async function tryCatch<T>(
  fn: () => Promise<T>
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const data = await fn()
    return { data, error: null }
  } catch (err: any) {
    const error = err instanceof Error ? err : new Error(String(err))
    console.error("Error caught in tryCatch:", error)
    return { data: null, error }
  }
}
