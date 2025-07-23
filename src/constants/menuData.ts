type MenuItem = {
  id: string;
  label: string;
  children?: MenuItem[];
};

export const menuData: MenuItem[] = [
  {
    id: "master",
    label: "Master",
    children: [
      {
        id: "terminal",
        label: "Terminal",
        children: [
          {
            id: "terminalInfo",
            label: "Terminal Info",
          },
          {
            id: "terminalLayout",
            label: "Terminal Layout",
          },
          {
            id: "berthDefine",
            label: "Berth Define",
          },
          {
            id: "yardDefine",
            label: "Yard Define",
          },
          {
            id: "gateDefine",
            label: "Gate Define",
          },
          {
            id: "blockObject",
            label: "Block Object",
          },
        ],
      },
      {
        id: "cargo",
        label: "Cargo",
        children: [
          {
            id: "unitType",
            label: "Unit Type",
          },
          {
            id: "unitDimension",
            label: "Unit Dimension",
          },
          {
            id: "isoContainer",
            label: "ISO Container",
          },
          {
            id: "imdg",
            label: "IMDG",
          },
          {
            id: "commodity",
            label: "Commodity",
          },
          {
            id: "damageCode",
            label: "Damage Code",
          },
          {
            id: "weightGroup",
            label: "Weight Group",
          },
          {
            id: "reeferContainer",
            label: "Reefer Container",
          },
          {
            id: "cellDesign1",
            label: "Cell Design",
          },
          {
            id: "cellDesign2",
            label: "Cell Design",
          },
          {
            id: "hsCode",
            label: "HS Code",
          },
          {
            id: "sealList",
            label: "Seal List",
          },
          {
            id: "model",
            label: "Model",
          },
        ],
      },
      {
        id: "business",
        label: "Business",
        children: [
          {
            id: "pointOfWork",
            label: "Point of Work",
          },
          {
            id: "operationProcess",
            label: "Operation Process",
          },
          {
            id: "class",
            label: "Class",
          },
          {
            id: "specialServiceDefine",
            label: "Special Service Define",
          },
          {
            id: "validation",
            label: "Validation",
          },
          {
            id: "cargoHold",
            label: "Cargo Hold",
          },
          {
            id: "freeDays",
            label: "Free Days",
          },
          {
            id: "customer",
            label: "Customer",
          },
          {
            id: "planType",
            label: "Plan Type",
          },
          {
            id: "holiday",
            label: "Holiday",
          },
        ],
      },
      {
        id: "location",
        label: "Location",
        children: [
          {
            id: "portAndHub",
            label: "Port & Hub",
          },
          {
            id: "place",
            label: "Place",
          },
        ],
      },
      {
        id: "transport",
        label: "Transport",
        children: [
          {
            id: "transporter",
            label: "Transporter",
          },
          {
            id: "trailer",
            label: "Trailer",
          },
        ],
      },
      {
        id: "general",
        label: "General",
        children: [
          {
            id: "commonCode",
            label: "Common Code",
          },
          {
            id: "reasonCode",
            label: "Reason Code",
          },
        ],
      },
      {
        id: "user",
        label: "User",
        children: [
          {
            id: "userId",
            label: "User ID",
          },
          {
            id: "privilege",
            label: "Privilege",
          },
        ],
      },
    ],
  },
  {
    id: "document",
    label: "Document",
    children: [
      {
        id: "edi",
        label: "EDI Manager",
        children: [
          {
            id: "vermas",
            label: "VERMAS",
          },
          {
            id: "coparn",
            label: "COPARN",
          },
        ],
      },
      {
        id: "depotContainerList",
        label: "Depot Container List",
      },
      {
        id: "bookingList",
        label: "Booking List",
      },
      {
        id: "terminalVesselSchedule",
        label: "Terminal Vessel Schedule",
      },
      {
        id: "fileManager",
        label: "File Manager",
      },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    children: [
      {
        id: "cargoDetail",
        label: "Cargo Detail",
      },
      {
        id: "cargoRecap",
        label: "Cargo Recap",
      },
      {
        id: "multiCorrection",
        label: "Multi Correction",
      },
      {
        id: "specialCargo",
        label: "Special Cargo",
        children: [
          {
            id: "reefer",
            label: "Reefer",
          },
          {
            id: "hazardous",
            label: "Hazardous",
          },
          {
            id: "oog",
            label: "OOG",
          },
        ],
      },
      {
        id: "cargoManagement",
        label: "Cargo Management",
        children: [
          {
            id: "holdRelease",
            label: "Hold & Release",
          },
          {
            id: "combination",
            label: "Combination",
          },
          {
            id: "inventoryPhoto",
            label: "Inventory Photo",
          },
          {
            id: "specialService",
            label: "Special Service",
          },
          {
            id: "damageManagement",
            label: "Damage Management",
          },
        ],
      },
    ],
  },
  {
    id: "truck",
    label: "Truck",
    children: [
      {
        id: "transportOrder",
        label: "Transport Order",
      },
      {
        id: "transportOrderMonitoring",
        label: "Transport Order Monitoring",
      },
      {
        id: "gateManager",
        label: "Gate Manager",
      },
      {
        id: "troubleList",
        label: "Trouble List",
      },
    ],
  },
  {
    id: "vessel",
    label: "Vessel",
    children: [
      {
        id: "vesselVoyage",
        label: "Vessel & Voyage",
      },
    ],
  },
  {
    id: "yard",
    label: "Yard",
    children: [
      {
        id: "yardView",
        label: "Yard View",
      },
      {
        id: "yardPlan",
        label: "Yard Plan",
        children: [
          {
            id: "yardPlanManager",
            label: "Yard Plan Manager",
          },
          {
            id: "yardDedication",
            label: "Yard Dedication",
          },
        ],
      },
      {
        id: "yardEstimation",
        label: "Yard Estimation",
        children: [
          {
            id: "yardLogicVerifier",
            label: "Yard Logic Verifier",
          },
          {
            id: "estimatedYardPosition",
            label: "Estimated Yard Position",
          },
          {
            id: "reHandling",
            label: "Re-handling",
          },
        ],
      },
      {
        id: "housekeeping",
        label: "Housekeeping",
        children: [
          {
            id: "housekeepingPlan",
            label: "Housekeeping Plan",
          },
          {
            id: "housekeepingQueue",
            label: "Housekeeping Queue",
          },
          {
            id: "invalidGroundingList",
            label: "Invalid Grounding List",
          },
        ],
      },
      {
        id: "yardRule",
        label: "Yard Rule",
        children: [
          {
            id: "groundingPolicy",
            label: "Grounding Policy",
          },
          {
            id: "pickupPolicy",
            label: "Pickup Policy",
          },
        ],
      },
    ],
  },
  {
    id: "cfs",
    label: "CFS & Warehouse",
    children: [
      {
        id: "stuffingStripping",
        label: "Stuffing / Stripping",
      },
    ],
  },
  {
    id: "operation",
    label: "Operation",
    children: [
      {
        id: "gangManager",
        label: "Gang Manager",
      },
      {
        id: "itvMonitoring",
        label: "ITV Monitoring",
      },
      {
        id: "taskManager",
        label: "Task Manager",
      },
      {
        id: "operationLog",
        label: "Operation Log",
      },
      {
        id: "mdt",
        label: "MDT",
      },
    ],
  },
  {
    id: "equipment",
    label: "Equipment",
    children: [
      {
        id: "equipmentSpecification",
        label: "Equipment Specification",
      },
      {
        id: "performanceRecord",
        label: "Performance Record",
      },
      {
        id: "mdtAccessLog",
        label: "MDT Access Log",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    children: [
      {
        id: "define",
        label: "Define",
        children: [
          {
            id: "billingDefine",
            label: "Billing Define",
          },
          {
            id: "tariffCodeManagement",
            label: "Tariff Code Management",
          },
          {
            id: "specialServiceDefine",
            label: "Special Service Define",
          },
        ],
      },
      {
        id: "billing",
        label: "Billing",
        children: [
          {
            id: "quotation",
            label: "Quotation",
          },
          {
            id: "terminalService",
            label: "Terminal Service",
          },
          {
            id: "specialService",
            label: "Special Service",
          },
          {
            id: "invoice",
            label: "Invoice",
          },
          {
            id: "invoiceList",
            label: "Invoice List",
          },
          {
            id: "billingHold",
            label: "Billing Hold",
          },
        ],
      },
    ],
  },
  {
    id: "hr",
    label: "HR",
    children: [],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    children: [
      {
        id: "smartVision",
        label: "Smart Vision",
      },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    children: [
      {
        id: "dashboardMain",
        label: "Dashboard",
      },
      {
        id: "containerYardBlockSummary",
        label: "Container Yard Block Summary",
      },
      {
        id: "hrPerformanceReport",
        label: "HR Performance report",
      },
      {
        id: "terminalInOut",
        label: "Terminal In Out",
      },
      {
        id: "gateInOutReport",
        label: "Gate In & Out Report",
      },
      {
        id: "containerTruckTurnTime",
        label: "Container Truck Turn Time",
      },
      {
        id: "gateMovementAnalysisReport",
        label: "Gate Movement Analysis Repor",
      },
    ],
  },
  {
    id: "interface",
    label: "Interface",
    children: [
      {
        id: "serviceControl",
        label: "Service Control",
      },
      {
        id: "communicationChannel",
        label: "Communication Channel",
      },
      {
        id: "fileFlowRule",
        label: "File Flow Rule",
      },
    ],
  },
  {
    id: "admin",
    label: "Admin",
    children: [
      {
        id: "terminalCode",
        label: "Terminal Code",
      },
      {
        id: "voyageLogSetup",
        label: "Voyage Log Setup",
      },
      {
        id: "systemResource",
        label: "System Resource",
      },
      {
        id: "powManager",
        label: "POW Manager",
      },
      {
        id: "systemMenu",
        label: "System Menu",
      },
      {
        id: "inventoryGenerator",
        label: "Inventory Generator",
      },
      {
        id: "multiLanguage",
        label: "Multi-language",
      },
      {
        id: "functionTest",
        label: "Function Test",
        children: [
          {
            id: "masterApiNew",
            label: "Master API New",
          },
          {
            id: "updateContainerXYPosition",
            label: "Update Container XY Position",
          },
          {
            id: "cacheReload",
            label: "Cache Reload",
          },
          {
            id: "itvPoolingTest1",
            label: "ITV Pooling Test 1",
          },
          {
            id: "itvPoolingTest2",
            label: "ITV Pooling Test 2",
          },
          {
            id: "commonFunctionTest",
            label: "Common Function Test",
          },
          {
            id: "masterApiService",
            label: "Master API Service",
          },
        ],
      },
      {
        id: "mdt",
        label: "MDT",
      },
      {
        id: "batchJobManagement",
        label: "Batch Job Management",
      },
      {
        id: "dataPurgeManagement",
        label: "Data Purge Management",
      },
      {
        id: "dataSet",
        label: "DataSet",
      },
      {
        id: "parameter",
        label: "Parameter",
      },
      {
        id: "role",
        label: "Role",
      },
    ],
  },
];
