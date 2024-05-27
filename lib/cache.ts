import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";
// This is the helper function that will help to cache any data fetching functions
type Callback = (...args: any[]) => Promise<any>;
export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {}
) {
    // Here it will cache the data which is fetched by the function ,and it will use that function to refetch on the dependencies, change through calling it again using callBack
  return nextCache(reactCache(cb), keyParts, options);
}
