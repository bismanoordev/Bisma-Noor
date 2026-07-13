// CSS Only Cubes Hover Effect — structure from freefrontend.com,
// re-colored to match the portfolio theme (see .iso-cubes styles in globals.css)
export default function IsoCubes() {
  const columns = [-1, 0, 1];
  const layers = [3, 2, 1];

  return (
    <div className="iso-scene">
      {/* Soft glow behind the cubes */}
      <div className="absolute inset-6 pl-6 rounded-full bg-[rgba(34,211,238,0.08)] blur-[70px] pointer-events-none" />

      <div className="iso-cubes">
        {[0, 1, 2].map((c) => (
          <div className="cube" key={c}>
            {columns.map((x) => (
              <div key={x} style={{ '--x': x, '--y': 0 }}>
                {layers.map((i) => (
                  <span key={i} style={{ '--i': i }} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
