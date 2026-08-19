export type HealthStatus = {
  status: "ok";
  service: string;
  version: string;
  timestamp: string;
};

export function buildHealthStatus(
  service: string,
  version: string,
  now: Date = new Date(),
): HealthStatus {
  return {
    status: "ok",
    service,
    version,
    timestamp: now.toISOString(),
  };
}
