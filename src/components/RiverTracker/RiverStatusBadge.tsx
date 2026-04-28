import { RiverCondition } from "../../data/riverConfig";
import "../../styles/RiverStatusBadge.css";

const LABELS: Record<RiverCondition, string> = {
  high: "High",
  above_normal: "Above Normal",
  normal: "Normal",
  below_normal: "Below Normal",
  low: "Low",
  unknown: "No data",
};

const CSS_SUFFIX: Record<RiverCondition, string> = {
  high: "high",
  above_normal: "above-normal",
  normal: "normal",
  below_normal: "below-normal",
  low: "low",
  unknown: "unknown",
};

interface RiverStatusBadgeProps {
  condition: RiverCondition;
}

const RiverStatusBadge = ({ condition }: RiverStatusBadgeProps) => (
  <span
    className={`river-status-badge river-status-badge--${CSS_SUFFIX[condition]}`}
  >
    {LABELS[condition]}
  </span>
);

export default RiverStatusBadge;
