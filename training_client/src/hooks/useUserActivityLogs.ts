import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchUserActivityLogsResponse {
  log_count: number;
  data: string[];
}

const useUserActivityLogs = () => {
  const [userActivityLogs, setUserActivityLogs] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchUserActivityLogsResponse>("/logs", {
        signal: controller.signal,
      })
      .then((res) => {
        setUserActivityLogs(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { userActivityLogs, error, isLoading };
};

export default useUserActivityLogs;
