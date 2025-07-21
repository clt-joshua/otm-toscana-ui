import React from "react";
import ShipIcon from "../assets/icon_ship.svg?react";
import TerminalIcon from "../assets/icon_terminal.svg?react";
import TruckIcon from "../assets/icon_truck.svg?react";
import type {
  ButtonData,
  ChipGroup,
} from "../pages/taskManager/TaskManagerTypes";

export const CHIP_GROUPS: ChipGroup[] = [
  {
    id: "ship",
    items: [
      {
        label: "Ship",
        type: "icon",
        icon: React.createElement(ShipIcon),
        color: "white",
        bgColor: "rgba(21, 179, 205, 1)",
      },
      {
        label: "DS",
        type: "text",
        color: "white",
        bgColor: "rgba(14, 142, 194, 1)",
      },
      {
        label: "LD",
        type: "text",
        color: "white",
        bgColor: "rgba(240, 144, 40, 1)",
      },
      {
        label: "RS",
        type: "text",
        color: "white",
        bgColor: "rgba(58, 58, 58, 1)",
      },
      {
        label: "LC",
        type: "text",
        color: "black",
        bgColor: "rgba(246, 213, 109, 1)",
      },
      {
        label: "DE",
        type: "text",
        color: "black",
        bgColor: "rgba(217, 214, 48, 1)",
      },
    ],
  },
  {
    id: "truck",
    items: [
      {
        label: "Truck",
        type: "icon",
        icon: React.createElement(TruckIcon),
        bgColor: "rgba(68, 162, 77, 1)",
        color: "white",
      },
      {
        label: "GI",
        type: "text",
        color: "black",
        bgColor: "rgba(72, 210, 98, 1)",
      },
      {
        label: "GO",
        type: "text",
        color: "white",
        bgColor: "rgba(250, 53, 51, 1)",
      },
      {
        label: "GC",
        type: "text",
        color: "white",
        bgColor: "rgba(160, 160, 160, 1)",
      },
    ],
  },
  {
    id: "terminal",
    items: [
      {
        label: "Terminal",
        type: "icon",
        icon: React.createElement(TerminalIcon),
        color: "white",
        bgColor: "rgba(251, 140, 0, 1)",
      },
      {
        label: "HK",
        type: "text",
        color: "white",
        bgColor: "rgba(91, 56, 170, 1)",
      },
      {
        label: "AH",
        type: "text",
        color: "black",
        bgColor: "rgba(206, 227, 238, 1)",
      },
      {
        label: "CT",
        type: "text",
        color: "white",
        bgColor: "rgba(22, 59, 84, 1)",
      },
    ],
  },
];

export const STATUS_OPTIONS = ["Initialize", "Active", "Complete", "Suspended"];

export const START_BUTTON_DATA: ButtonData[] = [
  { label: "RS", variant: "outlined", disabled: true },
  { label: "RS01", variant: "outlined", disabled: true },
  { label: "TP3-01-A-3", variant: "outlined", disabled: true },
  { label: "2024-07-30 16:15", variant: "outlined", disabled: true },
];

export const END_BUTTON_DATA: ButtonData[] = [
  { label: "RS", variant: "outlined" },
  { label: "RS01", variant: "outlined" },
  { label: "TP3-01-A-3", variant: "outlined" },
  { label: "RE-ALLOCATION", variant: "contained", action: "reallocation" },
  { label: "COMPLETE", variant: "contained", action: "complete" },
];
