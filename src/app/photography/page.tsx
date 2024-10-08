'use client'
import Journaling from "@/components/Journaling";
import Image from "next/image";
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
    <main className="justify-between items-center min-h-screen">
      <div>
        <div className="grid">
          {/* <Image src="/EffeilDark.JPG" alt="Logo" width={700} height={140} /> */}
        </div>
      </div>
    </main>
  );
}
