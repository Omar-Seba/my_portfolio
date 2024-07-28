'use client'
import React from "react";
import { useState } from "react";



export default function Home() {
  const [hoverId, setHoverId] = useState(null);

  const treeData = {
    id: 'root',
    name: 'Root',
    children: [
      {
        id: 'child1',
        name: 'Child 1',
        children: [
          { id: 'grandchild1.1', name: 'Grandchild 1.1' },
          { id: 'grandchild1.2', name: 'Grandchild 1.2' }
        ]
      },
      {
        id: 'child2',
        name: 'Child 2',
        children: [
          { id: 'grandchild2.1', name: 'Grandchild 2.1' },
          { id: 'grandchild2.2', name: 'Grandchild 2.2' }
        ]
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>home page</div>
    </main>
  );
}
