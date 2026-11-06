import type { UIDict } from "@/i18n/ui";

export type FolderTone = "cobalt" | "sand" | "ink" | "white" | "cream";

export interface StackFolder {
  key: keyof UIDict["stack"]["folders"];
  tone: FolderTone;
  tools: { name: string; tag: string }[];
}

export const stack: StackFolder[] = [
  {
    key: "backend",
    tone: "cobalt",
    tools: [
      { name: "Go", tag: "go" },
      { name: "Node.js", tag: "ts" },
      { name: "NestJS", tag: "ts" },
      { name: "GraphQL", tag: "api" },
      { name: "gRPC", tag: "rpc" },
    ],
  },
  {
    key: "data",
    tone: "sand",
    tools: [
      { name: "PostgreSQL", tag: "sql" },
      { name: "MongoDB", tag: "nosql" },
      { name: "MySQL", tag: "sql" },
      { name: "DynamoDB", tag: "nosql" },
      { name: "Redis", tag: "cache" },
      { name: "BullMQ", tag: "queue" },
    ],
  },
  {
    key: "cloud",
    tone: "ink",
    tools: [
      { name: "AWS", tag: "cloud" },
      { name: "Lambda", tag: "fn" },
      { name: "Kinesis", tag: "stream" },
      { name: "IoT Core", tag: "iot" },
      { name: "SQS", tag: "queue" },
      { name: "Serverless", tag: "iac" },
    ],
  },
  {
    key: "frontend",
    tone: "white",
    tools: [
      { name: "React", tag: "ui" },
      { name: "Next.js", tag: "ssr" },
      { name: "Angular", tag: "ts" },
    ],
  },
  {
    key: "mobile",
    tone: "white",
    tools: [
      { name: "Flutter", tag: "dart" },
      { name: "React Native", tag: "ts" },
    ],
  },
  {
    key: "tools",
    tone: "cream",
    tools: [
      { name: "Retool", tag: "lowcode" },
      { name: "Nx", tag: "mono" },
      { name: "Odoo", tag: "erp" },
    ],
  },
];
