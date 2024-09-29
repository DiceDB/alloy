"use client"

import React from "react"
import { Search } from "lucide-react"
import { DiceCmds, DiceCmdMeta } from "@/data/command"
import CommandPage from "./command"

interface SearchBoxProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBox({ search, setSearch }: SearchBoxProps) {
  const filteredCommands = Object.values(DiceCmds).filter((cmd: DiceCmdMeta) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <div className="flex items-center bg-gray-200 border border-gray-200 rounded px-2">
          <Search className="text-gray-900 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands..."
            className="bg-transparent border-none outline-none w-full py-2 text-gray-900"
          />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {search.length > 1 && filteredCommands.map((cmdMeta) => (
          <CommandPage
            key={cmdMeta.title}
            title={cmdMeta.title}
            syntax={cmdMeta.syntax}
            body={cmdMeta.body}
            url={cmdMeta.url}
          />
        ))}
      </div>
    </div>
  )
}