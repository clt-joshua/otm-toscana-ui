import BasicCustomChip from "../../components/chip/BasicCustomChip";
import BasicDataGrid from "../../components/data-grid/BasicDataGrid";
import { TASK_MANAGER_TABLE_DATA } from "../../constants/taskManagerData";

export default function DataTableSection() {
  const header = [
    { key: "No", label: "No" },
    { key: "status", label: "Status" },
    { key: "cargo", label: "Cargo" },
    { key: "planType", label: "Plan Type" },
    { key: "type", label: "Type" },
    { key: "opr", label: "OPR" },
    { key: "pod", label: "POD" },
    { key: "npod", label: "NPOD" },
    { key: "fpod", label: "FPOD" },
    { key: "from", label: "From" },
    { key: "to", label: "To" },
    { key: "transporter", label: "Transporter" },
    { key: "startEq", label: "Start EQ" },
    { key: "fa", label: "F/A" },
    { key: "recDelCardNo", label: "REC/DEL Card No." },
    { key: "waiting", label: "Waiting(mins)" },
    { key: "planSeq", label: "Plan Seq." },
    { key: "opProcess", label: "Op.Process" },
    { key: "port", label: "Port" },
  ];

  const data = TASK_MANAGER_TABLE_DATA.map((row, index) => ({
    No: index + 1,
    status: row.status,
    cargo: row.cargo,
    planType: <PlanTypeCell planType={row.planType} />,
    type: <TypeCell type={row.type} />,
    opr: <OprCell opr={row.opr} />,
    pod: row.pod,
    npod: <NpodCell npod={row.npod} />,
    fpod: <FpodCell fpod={row.fpod} />,
    from: row.from,
    to: row.to,
    transporter: row.transporter,
    startEq: row.startEq,
    fa: row.fa,
    recDelCardNo: row.recDelCardNo,
    waiting: row.waiting,
    planSeq: row.planSeq,
    opProcess: row.opProcess,
    port: row.port,
    cargoKey: row.cargo, // key prop용
  }));

  return <BasicDataGrid header={header} data={data} />;
}

function PlanTypeCell({ planType }: { planType: string }) {
  const chipMap: Record<string, { bgColor: string; textColor: string }> = {
    AH: { bgColor: "rgba(206, 227, 238, 1)", textColor: "black" },
    GO: { bgColor: "rgba(250, 53, 51, 1)", textColor: "white" },
    GI: { bgColor: "rgba(72, 210, 98, 1)", textColor: "black" },
    GC: { bgColor: "rgba(160, 160, 160, 1)", textColor: "white" },
    HK: { bgColor: "rgba(91, 56, 170, 1)", textColor: "white" },
    CT: { bgColor: "rgba(22, 59, 84, 1)", textColor: "white" },
  };

  const chip = chipMap[planType];

  if (!chip) {
    return null;
  }

  return (
    <BasicCustomChip
      label={planType}
      bgColor={chip.bgColor}
      textColor={chip.textColor}
    />
  );
}

function TypeCell({ type }: { type: string }) {
  const chipMap: Record<string, { bgColor: string; textColor: string }> = {
    MSK: { bgColor: "rgba(97, 168, 232, 1)", textColor: "black" },
    NYK: { bgColor: "rgba(17, 97, 215, 1)", textColor: "white" },
  };

  const chip = chipMap[type];

  if (!chip) {
    return null;
  }

  return (
    <BasicCustomChip
      label={type}
      bgColor={chip.bgColor}
      textColor={chip.textColor}
    />
  );
}

function OprCell({ opr }: { opr: string }) {
  const chipMap: Record<string, { bgColor: string; textColor: string }> = {
    MYPEN: { bgColor: "rgba(241, 140, 239, 1)", textColor: "black" },
    MYPKG: {
      bgColor: "rgba(249, 121, 53, 1)",
      textColor: "rgba(41, 64, 176, 1)",
    },
  };

  const chip = chipMap[opr];

  if (!chip) {
    return null;
  }

  return (
    <BasicCustomChip
      label={opr}
      bgColor={chip.bgColor}
      textColor={chip.textColor}
    />
  );
}

function NpodCell({ npod }: { npod: string }) {
  const chipMap: Record<string, { bgColor: string; textColor: string }> = {
    NZTIU: { bgColor: "rgba(17, 97, 215, 1)", textColor: "white" },
    FRCSJ: { bgColor: "rgba(33, 150, 243, 1)", textColor: "white" },
    CNHUA: { bgColor: "rgba(124, 121, 227, 1)", textColor: "white" },
  };

  const chip = chipMap[npod];

  if (!chip) {
    return null;
  }

  return (
    <BasicCustomChip
      label={npod}
      bgColor={chip.bgColor}
      textColor={chip.textColor}
    />
  );
}

function FpodCell({ fpod }: { fpod: string }) {
  return (
    <BasicCustomChip
      label={fpod}
      bgColor="rgba(255, 193, 7, 1)"
      textColor="black"
    />
  );
}
