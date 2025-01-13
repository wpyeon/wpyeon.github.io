import { SiReact, SiElectron, SiSqlite } from "react-icons/si";

export interface ChipProps {
  type: string;
}

interface ChipType {
  icon: React.ReactNode;
  label: string;
  color: string;
  textColor: string;
}

const iconDict: { [key: string]: ChipType } = {
  "react": { icon: <SiReact />, label: "React", color: "#61DBFB", textColor: "#000" },
  "electron": { icon: <SiElectron />, label: "Electron", color: "#1b1c25", textColor: "#fff" },
  "sqlite": { icon: <SiSqlite />, label: "SQLite", color: "#003b57", textColor: "#fff" }
}

export default function DevChip({ type }: ChipProps) {
  const { icon, label, color, textColor } = iconDict[type];
  return (
    <div 
      className="inline-flex items-center px-2 gap-1 rounded-lg text-sm font-semibold"
      style={{ backgroundColor: color, color: textColor }}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}
