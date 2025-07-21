import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BasicCustomChip from "../../components/chip/BasicCustomChip";
import { TASK_MANAGER_TABLE_DATA } from "../../constants/taskManagerData";

export default function DataTableSection() {
  return (
    <TableContainer
      sx={{
        flexGrow: 1,
        width: "100%",
        height: 0,
        minWidth: "max-content",
      }}
    >
      <Table
        stickyHeader
        size="small"
        sx={{
          tableLayout: "auto",
          minWidth: "max-content",
          width: "max-content",
        }}
      >
        <TableHead>
          <TableRow>
            {[
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
            ].map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  minWidth: "max-content",
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {TASK_MANAGER_TABLE_DATA.map((row, index) => (
            <TableRow key={row.cargo}>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {index + 1}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.status}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.cargo}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                <PlanTypeCell planType={row.planType} />
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                <TypeCell type={row.type} />
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                <OprCell opr={row.opr} />
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.pod}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                <NpodCell npod={row.npod} />
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                <FpodCell fpod={row.fpod} />
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.from}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.to}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.transporter}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.startEq}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.fa}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.recDelCardNo}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.waiting}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.planSeq}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.opProcess}
              </TableCell>
              <TableCell sx={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
                {row.port}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
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
