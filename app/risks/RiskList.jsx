import Link from "next/link";

// async function getRisks() {
//   const res = await fetch("http://localhost:3000/api/Risks", {
//     next: {
//       revalidate: 0, // use 0 to opt out of using cache
//     },
//   });

//   return res.json();
// }

const getRisks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Risks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function RiskList() {
  const { risks } = await getRisks();

  return (
    <>
      {risks.map((risk) => (
        <div key={risk._id} className="card my-5">
          <Link href={`/risk/${risk.id}`}>
            <h3>
              {risk.riskid} <span> - {risk.riskshortname}</span>
            </h3>
            <p>{risk.riskdescription}</p>

            <div className={`pill ${risk.riskscore < 12 ? "low" : "high"}`}>
              {risk.riskscore < 12 ? "Low Inherent" : "High Inherent"} Risk
            </div>
          </Link>
        </div>
      ))}
      {/* // use switch above */}
      {risks.length === 0 && (
        <p className="text-center">There are no open risks , yay!</p>
      )}
    </>
  );
}
