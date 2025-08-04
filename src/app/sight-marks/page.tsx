"use client";

import React from "react";

const G = 32.174;
const FEET_PER_YARDS = 3;

function calculateDrop(distance: number, speed: number) {
  const time = distance / speed;
  const drop = 0.5 * G * time ** 2;
  return drop;
}

function interpolateMark(
  drop: number,
  drop1: number,
  mark1: number,
  drop2: number,
  mark2: number,
) {
  return mark1 + ((drop - drop1) * (mark2 - mark1)) / (drop2 - drop1);
}

function SightMarks() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputParams, setInputParams] = React.useState({
    arrow_speed_fps: 200,
    sight_mark_1: 40,
    sight_mark_2: 90,
    distance_1_yards: 20,
    distance_2_yards: 60,
  });

  const calculations = React.useCallback(() => {
    const d1 = inputParams.distance_1_yards * FEET_PER_YARDS;
    const d2 = inputParams.distance_2_yards * FEET_PER_YARDS;

    const drop1 = calculateDrop(d1, inputParams.arrow_speed_fps);
    const drop2 = calculateDrop(d2, inputParams.arrow_speed_fps);

    const tape = [];
    for (let yards = 10; yards <= 70; yards += 10) {
      const dist_ft = yards * FEET_PER_YARDS;
      const drop = calculateDrop(dist_ft, inputParams.arrow_speed_fps);
      const mark = interpolateMark(
        drop,
        drop1,
        inputParams.sight_mark_1,
        drop2,
        inputParams.sight_mark_2,
      );
      tape.push([yards, Math.round(mark * 100) / 100]);
    }

    return tape;
  }, [inputParams]);

  return (
    <div className="flex flex-col items-center gap-16 mx-auto mt-16 sm:flex-row justify-evenly">
      <div className="flex flex-col gap-4">
        {calculations().map(([yards, mark]) => (
          <div key={yards}>
            {yards} yards: {mark}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full max-w-sm gap-4 p-8 bg-white border rounded-lg shadow sm:max-w-md">
        {/* <label className="flex flex-col text-sm font-medium text-gray-700">
          Arrow Speed (fps)
          <input
            type="number"
            value={inputParams.arrow_speed_fps}
            onChange={(e) =>
              setInputParams({ ...inputParams, arrow_speed_fps: Number(e.target.value) })
            }
            className="px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label> */}
        <div className="flex gap-4">
          <label className="flex flex-col text-xs font-medium text-gray-700 sm:text-sm">
            Distance 1 (yards)
            <input
              type="number"
              value={inputParams.distance_1_yards}
              onChange={(e) =>
                setInputParams({ ...inputParams, distance_1_yards: Number(e.target.value) })
              }
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-xs font-medium text-gray-700 sm:text-sm">
            Sight Mark 1
            <input
              type="number"
              value={inputParams.sight_mark_1}
              onChange={(e) =>
                setInputParams({ ...inputParams, sight_mark_1: Number(e.target.value) })
              }
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="flex flex-col text-xs font-medium text-gray-700 sm:text-sm">
            Distance 2 (yards)
            <input
              type="number"
              value={inputParams.distance_2_yards}
              onChange={(e) =>
                setInputParams({ ...inputParams, distance_2_yards: Number(e.target.value) })
              }
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-xs font-medium text-gray-700 sm:text-sm">
            Sight Mark 2
            <input
              type="number"
              value={inputParams.sight_mark_2}
              onChange={(e) =>
                setInputParams({ ...inputParams, sight_mark_2: Number(e.target.value) })
              }
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SightMarks;
