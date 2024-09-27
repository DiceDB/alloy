"use client"

import React, { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import { TerminalOutput } from 'react-terminal-ui'

export default function DiceDBPlayground() {
  const [cliInput, setCliInput] = useState("")
  const [triggers, setTriggers] = useState<number>(1000)
  const [cliOutput, setCliOutput] = useState<JSX.Element[]>([])
  const [searchInput, setSearchInput] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [cliOutput])

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const output = handleCommand(cliInput)
    setCliOutput([...cliOutput,
      <TerminalOutput key={cliOutput.length}>{`dice> ${cliInput}`}</TerminalOutput>,
      <TerminalOutput key={cliOutput.length + 1}>{output}</TerminalOutput>
    ])
    setCliInput("")
    setTriggers(triggers - 1)
  }

  const handleCommand = (command: string): string => {
    const action = command.split(" ")[0]
    switch (action.toUpperCase()) {
      case "SET": return "OK"
      case "GET": return "(nil)"
      default:
        return "Unknown command"
    }
  }

  const navbarColor = "#363636" // Bulma's is-dark navbar color

  return (
    <div className="is-flex is-flex-direction-column" style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', padding: '1rem' }}>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation" style={{ height: '60px', borderRadius: '10px', marginBottom: '1rem' }}>
        <div className="navbar-brand">
          <div className="navbar-item">
            <Image src="/icon.png" width={28} height={28} alt="DiceDB logo" className="mr-2" style={{ borderRadius: '50%' }} />
            <span className="title is-4 has-text-light">DiceDB</span>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="#" className="navbar-item has-text-light">Docs</a>
            <a href="#" className="navbar-item has-text-light">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="columns is-gapless is-flex-grow-1 m-0" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="column is-two-thirds p-0">
          <div ref={terminalRef} style={{ height: 'calc(100vh - 150px)', borderRadius: '10px 0 0 10px', overflow: 'auto', backgroundColor: navbarColor, padding: '1rem' }}>
            {cliOutput.map((output, index) => (
              <div key={index} style={{ marginBottom: '0.5rem' }}>{output}</div>
            ))}
            <form onSubmit={handleCliSubmit} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>dice&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1rem',
                  flexGrow: 1,
                  outline: 'none'
                }}
                autoFocus
              />
            </form>
          </div>
        </div>

        <div className="column p-0">
          <div className="box" style={{ height: 'calc(100vh - 150px)', borderRadius: '0 10px 10px 0', backgroundColor: '#000000FF' }}>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-dark"
                  type="text"
                  placeholder="Search Commands"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  style={{ borderRadius: '20px' }}
                />
                <span className="icon is-small is-left">
                  <Search size={18} color="#dbdbdb" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer has-background-dark has-text-light" style={{ height: '60px', padding: '0 1.5rem', borderRadius: '10px', marginTop: '1rem' }}>
        <div className="content has-text-centered is-flex is-justify-content-space-between is-align-items-center" style={{ height: '100%' }}>
          <span>Cleanup in 14:40 mins</span>
          <span>Command Triggers left: {triggers}</span>
        </div>
      </footer>
    </div>
  )
}