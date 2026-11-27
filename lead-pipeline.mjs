// VOSEYA 原生线索流水线：把发现、补全、背调、评分、草稿和 CRM 串成一个可追踪过程。
export const leadPipelineStages = [
  { id: "discover", label: "发现企业", short: "发现" },
  { id: "enrich", label: "补全公开资料", short: "补全" },
  { id: "research", label: "企业背调", short: "背调" },
  { id: "score", label: "相关度评分", short: "评分" },
  { id: "draft", label: "生成开发草稿", short: "草稿" },
  { id: "followup", label: "跟进计划", short: "跟进" },
  { id: "crm", label: "沉淀到 CRM", short: "CRM" },
];

export function pipelineStageLabel(id) {
  return leadPipelineStages.find((x) => x.id === id)?.label || "等待处理";
}

export function pipelineStageIndex(id) {
  const i = leadPipelineStages.findIndex((x) => x.id === id);
  return i < 0 ? 0 : i;
}

export function priorityLabel(value) {
  const n = Math.max(1, Math.min(5, Number(value) || 1));
  return ["低", "观察", "普通", "较高", "优先"][n - 1];
}
