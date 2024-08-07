"use client";
import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../utils/useCenteredTree";
import { Title } from "@mantine/core";
// import "./styles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}: {
  nodeDatum: {
    name: string;
    children?: any[];
    __rd3t?: {
      collapsed: boolean;
    };
  };
  toggleNode: () => void;
  foreignObjectProps: React.SVGAttributes<SVGForeignObjectElement>;
}) => (
  <g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t?.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

const mockCorpStructureData = {
  name: "Parent Corporation",
  children: [
    {
      name: "Subsidiary 1 (51%)",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Sub-subsidiary 1 (100%)",
          attributes: {
            department: "Fabrication",
          },
          children: [],
        },
        {
          name: "Sub-subsidiary 2 (100%)",
          attributes: {
            department: "Assembly",
          },
          children: [],
        },
      ],
    },
    {
      name: "Subsidiary 2 (49%)",
      attributes: {
        department: "Marketing",
      },
      children: [
        {
          name: "Sub-subsidiary 3 (100%)",
          attributes: {
            department: "A",
          },
          children: [],
        },
        {
          name: "Sub-subsidiary 4 (100%)",
          attributes: {
            department: "B",
          },
          children: [],
        },
        {
          name: "Sub-subsidiary 5 (100%)",
          attributes: {
            department: "B",
          },
          children: [],
        },
      ],
    },
  ],
};

export default function App() {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  return (
    <div
      style={containerStyles}
      ref={containerRef as unknown as React.RefObject<HTMLDivElement>}
    >
      <Title order={2}>Corp Structure</Title>
      <div style={{ width: "80%", height: "100%", border: "1px solid black" }}>
        <Tree
          data={mockCorpStructureData}
          translate={translate as { x: number; y: number }}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          orientation="vertical"
        />
      </div>
    </div>
  );
}
