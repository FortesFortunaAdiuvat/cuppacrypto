export default function HomeBody() {
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-black via-purple-950 to-indigo-950 text-fuchsia-100 py-16 px-4 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold drop-shadow-[0_0_0.3rem_#e879f9]">Welcome to CuppaCrypto</h1>
        <p className="max-w-2xl text-lg">
          Brewed coffee meets blockchain. Buy fresh beans and gear with your favorite cryptocurrency.
          Fueling you, and your trades.
        </p>
      </div>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-indigo-900/40 p-6 shadow-lg">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">Arcane Beans</h3>
          <p>Enchant your mornings with beans sourced from cryptic realms.</p>
        </div>
        <div className="rounded-lg bg-indigo-900/40 p-6 shadow-lg">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">Alchemy Gear</h3>
          <p>Tools imbued with futuristic energy to brew the perfect cup.</p>
        </div>
        <div className="rounded-lg bg-indigo-900/40 p-6 shadow-lg">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">Blockchain Wisdom</h3>
          <p>Unlock knowledge while sipping luminous lattes.</p>
        </div>
      </div>
    </section>
  );
}
