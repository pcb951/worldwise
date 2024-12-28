import { useSearchParams } from "react-router";

export function useUrlPosition() {
  const [searchParams, setSearchParam] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
