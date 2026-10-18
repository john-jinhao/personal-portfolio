import type { LucideIcon } from "lucide-react";
import { AirVent, ClipboardCheck, FileText, HardHat, Settings2, ShieldCheck, Wrench, Zap } from "lucide-react";

export interface Capability { title: string; description: string; icon: LucideIcon }

export const capabilities: Capability[] = [
  { title: "Facilities & Building Management", description: "Maintenance planning, operational coordination and attentive building-condition management.", icon: Settings2 },
  { title: "Preventive Maintenance", description: "A practical shift from reactive responses towards planned maintenance and reliable operations.", icon: Wrench },
  { title: "Project Coordination", description: "Clear work scopes, implementation requirements and coordinated project activity.", icon: ClipboardCheck },
  { title: "Technical Documentation", description: "Structured scopes of work, specifications, bills of quantities and pricing schedules.", icon: FileText },
  { title: "Contract & Vendor Management", description: "Service requirements, contractor coordination, quality control and performance review.", icon: HardHat },
  { title: "Safety & Quality Control", description: "Safe work practices, workmanship, testing requirements and responsible handover.", icon: ShieldCheck },
  { title: "Building Services", description: "Technical requirements for air-conditioning systems, controls and electrical provisions.", icon: AirVent },
  { title: "Continuous Improvement", description: "Opportunities to improve maintainability, service delivery and operational efficiency.", icon: Zap },
];
