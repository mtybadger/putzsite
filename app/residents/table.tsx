import React from "react";

export default function ResidentsTable() {
  // Data structure for the building layout.
  // Each block (Munroe, Hayden, Wood) has:
  // - left side rooms (top to bottom)
  // - middle column letters (vertical)
  // - right side rooms (top to bottom)
  //
  // Non-resident rooms have a type: 'nonresident', resident rooms have a name.
  // We will create arrays of rows; each row has { left, mid, right } entries.

  interface Room {
    label: string;
    type: "resident" | "nonresident";
    height: string;
    span?: boolean;
  }
  
  const housemastersSuite = {
    left: { label: "Housemasters' Suite", type: "nonresident", span: true } as Room
  };

  // Munroe block
  const munroeLetters = ["M", "U", "N", "R", "O", "E"];

  const munroeLeft = [
    { label: "Stairs", type: "nonresident", height: "h-12" },
    { label: "M204 (A)\nBrios Olivares ('26)", type: "resident", height: "h-16" },
    { label: "M203 (B)\nLai Wa Chu ('24)", type: "resident", height: "h-16" },
    { label: "M202 (B)\nSonny Wu ('25)", type: "resident", height: "h-16" },
    { label: "M201 (B)\nAidan Vaughan ('25)", type: "resident", height: "h-16" },
    { label: "Bathroom", type: "nonresident", height: "h-32" },
  ] as Room[];

  const munroeRight = [
    { label: "t", type: "nonresident", height: "h-28" },
    { label: "M210 (GRT)\nPeter Sharpe (G)", type: "resident", height: "h-36" },
    { label: "M211 (B)\nAndrea Molina ('25)", type: "resident", height: "h-16" },
    { label: "M212 (C)\nSebastian Garcia ('24)", type: "resident", height: "h-16" },
    { label: "M213 (B)\nNick Hougardy ('23)", type: "resident", height: "h-16" }
  ] as Room[];

  // Hayden block
  const haydenLetters = ["H", "A", "Y", "D", "E", "N"];

  const haydenLeft = [
    { label: "Basha Lounge", type: "nonresident", height: "h-16" },
    { label: "H204 (A)\nRachel Liu ('23)", type: "resident", height: "h-16" },
    { label: "Stairs", type: "nonresident", height: "h-16" },
    { label: "H203 (A)\nRiya Gupta ('26)", type: "resident", height: "h-16" },
    { label: "Bathroom", type: "nonresident", height: "h-32" },
    { label: "H202 (C)\nYeabsira Hawaz ('26)", type: "resident", height: "h-16" },
    { label: "H201 (A)\nWill Hathaway ('26)", type: "resident", height: "h-16" },
    { label: "H200 (A)\nMatthew De Jesus ('25)", type: "resident", height: "h-16" }
  ] as Room[];

  const haydenRight = [
    { label: "H206 (A)\nCeleste Meza ('25)", type: "resident", height: "h-16" },
    { label: "H207 (A)\nErin Zhang ('25)", type: "resident", height: "h-16" },
    { label: "H208 (A)\nRachel Dzwonkowski ('26)", type: "resident", height: "h-16" },
    { label: "H209\nJoseph Ntaimo ('23)", type: "resident", height: "h-16" },
    { label: "H210 (C)\nHarshal Chamdal ('23)", type: "resident", height: "h-16" },
    { label: "H211 (C)\nHien Le ('23)", type: "resident", height: "h-16" },
    { label: "H212 (A)\nHannah Kim ('23)", type: "resident", height: "h-16" },
    { label: "H213 (A)\nLeo Martinez-Silva ('23)", type: "resident", height: "h-16" },
    { label: "H214 (A)\nJordan Parker-Ashe ('24)", type: "resident", height: "h-16" }
  ] as Room[];

  // Wood block
  const woodLetters = ["W", "O", "O", "D"];

  const woodLeft = [
    { label: "Wood Lounge", type: "nonresident", height: "h-16" },
    { label: "Kitchen", type: "nonresident", height: "h-36" },
    { label: "W203 (B)\nLuc Paoli ('not a real MIT student')", type: "resident", height: "h-16" },
    { label: "Bathroom", type: "nonresident", height: "h-32" },
    { label: "Stairs", type: "nonresident", height: "h-16" },
    { label: "W202 (C)\nYeabsira Moges ('25)", type: "resident", height: "h-16" },
    { label: "W201 (B)\nLili Sun ('24)", type: "resident", height: "h-16" }
  ] as Room[];

  const woodRight = [
    { label: "Wood Lounge", type: "nonresident", height: "h-16" },
    { label: "W208 (B)\nClaudia Miklavcic ('26)", type: "resident", height: "h-16" },
    { label: "W209 (B)\nRulan Gu ('25)", type: "resident", height: "h-16" },
    { label: "W210 (B)\nJonhenry Poss ('23)", type: "resident", height: "h-16" },
    { label: "W211 (B)\nLuis Modes ('26)", type: "resident", height: "h-16" },
    { label: "W212 (C)\nMiguel Chacon ('25)", type: "resident", height: "h-16" },
    { label: "W213 (A)\nShafick Kayemba ('26)", type: "resident", height: "h-16" },
    { label: "W214 (C)\nSpruce Campbell ('26)", type: "resident", height: "h-16" },
    { label: "W215 (B)\nGhassan Aljawi ('24)", type: "resident", height: "h-16" }
  ] as Room[];

  // Helper to render a cell
  const renderCell = (room: Room | null) => {
    if (!room || !room.label) return null;
    const isNonResident = room.type === "nonresident";
    const classes = isNonResident
      ? "text-white bg-black border border-white p-2 text-sm"
      : "text-black bg-white p-2 text-sm border border-black";
    return (
      <div className={`flex items-center justify-center whitespace-pre-wrap ${classes} ${room.height}`}>
        {room.label}
      </div>
    );
  };

  // Helper to render vertical name column
  // We'll just stack letters in individual rows.
  const renderNameColumn = (letters: string[]) => {
    return (
      <div className="flex flex-col items-center justify-center">
        {letters.map((letter: string, idx: number) => (
          <div key={idx} className="text-white text-lg font-bold">
            {letter}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-auto max-h-[80vh] text-white">
      <div className="p-4">

        {/* Housemasters Suite top row */}
        <div className="grid grid-cols-3 mb-4">
          <div className="col-span-3">
            {renderCell(housemastersSuite.left)}
          </div>
        </div>

        {/* Munroe block */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {/* Left column (Munroe) */}
          <div className="flex flex-col space-y-2">
            {munroeLeft.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
          {/* Middle column (Munroe name) */}
          <div className="flex flex-col items-center justify-center">
            {renderNameColumn(munroeLetters)}
          </div>
          {/* Right column (Munroe) */}
          <div className="flex flex-col space-y-2">
            {munroeRight.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
        </div>

        {/* Hayden block */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {/* Left column (Hayden) */}
          <div className="flex flex-col space-y-2">
            {haydenLeft.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
          {/* Middle column (Hayden name) */}
          <div className="flex flex-col items-center justify-center">
            {renderNameColumn(haydenLetters)}
          </div>
          {/* Right column (Hayden) */}
          <div className="flex flex-col space-y-2">
            {haydenRight.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
        </div>

        {/* Wood block */}
        <div className="grid grid-cols-3 gap-2">
          {/* Left column (Wood) */}
          <div className="flex flex-col space-y-2">
            {woodLeft.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
          {/* Middle column (Wood name) */}
          <div className="flex flex-col items-center justify-center">
            {renderNameColumn(woodLetters)}
          </div>
          {/* Right column (Wood) */}
          <div className="flex flex-col space-y-2">
            {woodRight.map((room, i) => (
              <div key={i}>{renderCell(room)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
