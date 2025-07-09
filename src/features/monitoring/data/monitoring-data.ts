import { ApiCall, ApiUsageData, MonitoringStats } from "../types"

export const mockApiCalls: ApiCall[] = [
  {
    id: "1",
    ipAddress: "192.158.1.3",
    status: "accepted",
    timestamp: "2025-01-09T08:15:33Z",
    description: "",
    type: "normal",
  },
  {
    id: "2",
    ipAddress: "192.158.1.2",
    status: "accepted",
    timestamp: "2025-01-09T08:14:22Z",
    description: "",
    type: "normal",
  },
  {
    id: "3",
    ipAddress: "192.158.1.9",
    status: "rejected",
    timestamp: "2025-01-09T08:13:15Z",
    description: "Ditolak pada API suara",
    type: "normal",
  },
  {
    id: "4",
    ipAddress: "192.158.1.2",
    status: "accepted",
    timestamp: "2025-01-09T08:12:45Z",
    description: "",
    type: "normal",
  },
  {
    id: "5",
    ipAddress: "192.158.1.9",
    status: "rejected",
    timestamp: "2025-01-09T08:11:30Z",
    description: "Ditolak pada API Gamb..",
    type: "normal",
  },
]

export const mockSuspiciousCalls: ApiCall[] = [
  {
    id: "s1",
    ipAddress: "192.xxx.1.3",
    status: "rejected",
    timestamp: "2025-01-09T08:10:15Z",
    description: "Ditolak pada API citra",
    type: "suspicious",
  },
  {
    id: "s2",
    ipAddress: "192.xxx.1.3",
    status: "rejected",
    timestamp: "2025-01-09T08:09:45Z",
    description: "Ditolak pada API Gamb..",
    type: "suspicious",
  },
  {
    id: "s3",
    ipAddress: "192.xxx.1.3",
    status: "rejected",
    timestamp: "2025-01-09T08:08:30Z",
    description: "Ditolak pada API citra",
    type: "suspicious",
  },
  {
    id: "s4",
    ipAddress: "192.xxx.1.3",
    status: "rejected",
    timestamp: "2025-01-09T08:07:20Z",
    description: "Ditolak pada API suara",
    type: "suspicious",
  },
  {
    id: "s5",
    ipAddress: "192.xxx.1.3",
    status: "rejected",
    timestamp: "2025-01-09T08:06:10Z",
    description: "Ditolak pada API Gamb..",
    type: "suspicious",
  },
]

export const mockUsageData: ApiUsageData[] = [
  { date: "2025-01-01", calls: 120 },
  { date: "2025-01-02", calls: 180 },
  { date: "2025-01-03", calls: 150 },
  { date: "2025-01-04", calls: 220 },
  { date: "2025-01-05", calls: 190 },
  { date: "2025-01-06", calls: 160 },
  { date: "2025-01-07", calls: 200 },
  { date: "2025-01-08", calls: 170 },
  { date: "2025-01-09", calls: 140 },
]

export const mockStats: MonitoringStats = {
  totalCalls: 1000,
  acceptedCalls: 750,
  rejectedCalls: 200,
  suspiciousCalls: 50,
}
