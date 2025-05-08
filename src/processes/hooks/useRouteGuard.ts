// hooks/useRouteGuard.ts
import { useEffect } from "react";
import { useMeditationStore } from "@/processes/store";
import { useRouter } from "next/navigation";

export function useRouteGuard() {
  const router = useRouter();
  const isAllowed = useMeditationStore((state) => state.hasMeditation);

  useEffect(() => {
    if (!isAllowed) {
      router.replace("/");
    }
  }, [isAllowed, router]);
}
