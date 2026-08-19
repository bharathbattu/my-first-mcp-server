import { describe, expect, it } from "vitest";
import { buildHealthStatus } from "./health.ts";

describe("buildHealthStatus", () => {
  it("returns a stable health payload", () => {
    const now = new Date("2026-08-19T00:00:00.000Z");

    expect(buildHealthStatus("bharath-mcp", "1.0.0", now)).toEqual({
      status: "ok",
      service: "bharath-mcp",
      version: "1.0.0",
      timestamp: "2026-08-19T00:00:00.000Z",
    });
  });

  it("uses the supplied clock rather than hidden global state", () => {
    const now = new Date("2026-01-01T12:34:56.000Z");

    expect(buildHealthStatus("test-service", "0.1.0", now).timestamp).toBe(
      now.toISOString(),
    );
  });
});
