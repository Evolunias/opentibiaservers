'use client';

import Link from 'next/link';

export default function UpgradeSystemPage() {
  const upgradeAttributes = [
    { name: 'Armor', description: 'Increases total armor value for damage reduction' },
    { name: 'Defense', description: 'Boosts defense capability against attacks' },
    { name: 'Attack Power', description: 'Increases overall damage dealt' },
    { name: 'Attack Bonus', description: 'Additional attack bonuses and buffs' },
    { name: 'Critical Hit Damage', description: 'Multiplies critical strike damage' },
    { name: 'Damage Increase', description: 'Percentage increase to all damage' },
    { name: 'Damage Reduction', description: 'Reduces all incoming damage taken' },
    { name: 'Dodge Chance', description: 'Chance to completely avoid attacks' },
    { name: 'Damage Penetration', description: 'Ignores portion of enemy defense' },
    { name: 'Life Leech', description: 'Steals health from enemies hit' },
    { name: 'Mana Leech', description: 'Steals mana from enemies hit' },
  ];

  const bloodforgeSetBenefits = [
    { piece: 'Bloodforge Satchel', slot: 'Backpacks', bonus: 'Capacity +500, Weight Reduction +15%' },
    { piece: 'Bloodforge Helm', slot: 'Helmets', bonus: 'Armor +80, Defense +25' },
    { piece: 'Bloodforge Plate', slot: 'Armors', bonus: 'Armor +100, Defense +30, Damage Reduction +5%' },
    { piece: 'Bloodforge Leggings', slot: 'Legs', bonus: 'Armor +80, Defense +22, Dodge +3%' },
    { piece: 'Bloodforge Boots', slot: 'Boots', bonus: 'Armor +60, Defense +15, Dodge +5%' },
    { piece: 'Bloodforge Amulet', slot: 'Amulets', bonus: 'Magic Power +40, Mana Leech +5%, Spell Damage +8' },
    { piece: 'Bloodforge Ring', slot: 'Rings', bonus: 'Magic Power +25, Defense +10, Spell Damage +5' },
    { piece: 'Bloodforge Bolts', slot: 'Ammo Slots', bonus: 'Attack +35, Critical Damage +8%, Penetration +5' },
    { piece: 'Bloodforge Charm', slot: 'Charms', bonus: 'All Stats +5, Experience Boost +10%, Loot Increase +3%' },
  ];

  const upgradePath = [
    { level: 0, name: 'Base Item', description: 'Fresh equipment', requirements: 'None' },
    { level: 1, name: 'Tier 1', description: '+1 to all attributes', requirements: '1 Upgrade Stone' },
    { level: 2, name: 'Tier 2', description: '+2 cumulative', requirements: '2 Upgrade Stones, Small luck factor' },
    { level: 3, name: 'Tier 3', description: '+3 cumulative', requirements: '3 Upgrade Stones, Increased luck factor' },
    { level: 4, name: 'Tier 4', description: '+4 cumulative', requirements: '4 Upgrade Stones, High luck factor' },
    { level: 5, name: 'Tier 5', description: '+5 cumulative', requirements: '5 Upgrade Stones, Very high luck factor' },
    { level: 6, name: 'Tier 6', description: '+6 cumulative', requirements: '6 Upgrade Stones, Significant luck dependency' },
    { level: 7, name: 'Tier 7', description: '+7 cumulative', requirements: '7 Upgrade Stones, Major luck dependency' },
    { level: 8, name: 'Tier 8', description: '+8 cumulative', requirements: '8 Upgrade Stones, Extreme luck dependency' },
    { level: 9, name: 'Tier 9', description: '+9 cumulative', requirements: '9 Upgrade Stones, Near impossible' },
    { level: 10, name: 'Tier 10 (Max)', description: '+10 cumulative - Maximum power', requirements: '10 Upgrade Stones, Extreme dedication' },
  ];

  const sets = [
    {
      name: 'Bloodforge Set',
      tier: 'Legendary',
      level_req: 1400,
      description: 'The highest tier equipment in Evolisca, providing exceptional stats and full set bonuses',
      pieces: 9,
      set_bonus: 'Unlocks advanced upgrade mechanics, increased upgrade success rates, and special set attributes',
      sources: 'Boss drops, Raid rewards, Challenge Room'
    },
    {
      name: 'Challenge Room Set',
      tier: 'High-End',
      level_req: 1500,
      description: 'Rewarded for completing Challenge Room gauntlet',
      pieces: 'Full armor set',
      set_bonus: '+10% Critical Chance',
      sources: 'Challenge Room completion'
    },
    {
      name: 'Raid Boss Set (Thorn Style)',
      tier: 'High-End',
      level_req: 1200,
      description: 'Obtained from raid boss encounters',
      pieces: 'Full armor set',
      set_bonus: '+5% Critical Chance, +5% Damage Increase',
      sources: 'Raid bosses, Weekly bosses'
    },
    {
      name: 'Soul Set',
      tier: 'High-End',
      level_req: 1100,
      description: 'Crafted through the crafting system',
      pieces: 'Full armor set',
      set_bonus: '+10% Damage Increase',
      sources: 'Crafting system'
    },
    {
      name: 'High-Level Set',
      tier: 'Epic',
      level_req: 3500,
      description: 'Obtainable from high-level bosses',
      pieces: 'Full armor set',
      set_bonus: '+10% Damage Increase, +10% Critical Chance',
      sources: 'Weekly and World bosses'
    }
  ];

  const upgradeMechanics = [
    {
      title: 'Upgrade Stones',
      description: 'Required materials for upgrading equipment',
      cost: '15 Star Coins each',
      effect: 'Adds +1 to selected attribute per stone',
      cap: 'Maximum upgrade level of 10 per item'
    },
    {
      title: 'Luck System',
      description: 'Success of upgrades depends on luck',
      notes: 'Higher tiers have lower success rates',
      risk: 'Failed upgrades may not grant full bonus'
    },
    {
      title: 'Storage System',
      description: 'Upgrade gear directly from storage',
      convenience: 'No need to carry items while upgrading',
      access: 'Quick upgrades from bank'
    },
    {
      title: 'Boss Upgrades',
      description: 'Earn upgrade materials from boss defeats',
      sources: 'All boss types provide upgrade drops',
      strategy: 'Build custom damage or reduction setups'
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Progression</span>
          <h1>Upgrade System</h1>
          <p>
            Master the item upgrade system. Enhance equipment with upgrade stones, unlock advanced mechanics with the Bloodforge Set, and build custom gear for your playstyle.
          </p>

          <div style={{ marginTop: '28px', padding: '18px', borderRadius: '14px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
            <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Quick Facts</strong>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text)' }}>
              <li>Maximum upgrade level: <strong>10</strong></li>
              <li>Upgrade stone cost: <strong>15 Star Coins</strong></li>
              <li>Bloodforge Set pieces: <strong>9 total</strong></li>
              <li>Full set bonus: <strong>Advanced mechanics + bonuses</strong></li>
            </ul>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Getting Started</span>
            <h2>Upgrade Basics</h2>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>Step 1: Get Stones</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Earn Star Coins from tasks, quests, and bosses
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>Step 2: Purchase Stones</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Buy upgrade stones (15 coins each) from vendors
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>Step 3: Upgrade Equipment</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Use stones to boost item stats (via storage system)
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>Step 4: Stack Bonuses</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Combine with set bonuses for maximum power
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Upgradeable Attributes */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Enhancement Options</span>
            <h2>Upgradeable Attributes</h2>
          </div>
          <p>
            Choose which stats to enhance based on your build.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {upgradeAttributes.map((attr) => (
            <article key={attr.name} className="panel" style={{ padding: '18px', borderRadius: '14px' }}>
              <strong style={{ display: 'block', marginBottom: '8px' }}>{attr.name}</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                {attr.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Upgrade Levels */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Progression Tiers</span>
            <h2>Upgrade Levels (0-10)</h2>
          </div>
          <p>
            Each level requires more materials and luck, but provides greater bonuses.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {upgradePath.map((tier, idx) => (
            <article key={tier.level} className="panel" style={{ 
              padding: '16px', 
              borderRadius: '12px',
              borderLeft: `4px solid ${tier.level === 10 ? 'var(--gold)' : tier.level >= 7 ? '#ff6b6b' : 'var(--line)'}`,
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem' }}>{tier.name}</strong>
                  {tier.level === 10 && <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '600' }}>MAXIMUM</span>}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Lvl {tier.level}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '6px 0 0 0' }}>
                {tier.description}
              </p>
              <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Cost: {tier.requirements}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bloodforge Set */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Legendary Equipment</span>
            <h2>The Bloodforge Set</h2>
          </div>
          <p>
            The ultimate equipment set with powerful bonuses for level 1400+ players.
          </p>
        </div>

        <article className="panel" style={{ padding: '24px', marginBottom: '24px', borderRadius: '16px', borderTop: `4px solid var(--gold)` }}>
          <h3 style={{ margin: '0 0 16px 0' }}>Set Overview</h3>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Tier</span>
              <strong style={{ display: 'block', color: 'var(--gold)', marginTop: '4px' }}>Legendary</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Level Requirement</span>
              <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>1400+</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Pieces</span>
              <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>9</strong>
            </div>
          </div>
        </article>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ margin: '0 0 16px 0' }}>Set Pieces & Bonuses</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {bloodforgeSetBenefits.map((item, idx) => (
              <article key={idx} className="panel" style={{ padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <strong>{item.piece}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255, 255, 255, 0.05)', padding: '3px 8px', borderRadius: '4px' }}>
                    {item.slot}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                  {item.bonus}
                </p>
              </article>
            ))}
          </div>
        </div>

        <article className="panel" style={{ padding: '20px', borderRadius: '14px', background: 'rgba(251, 191, 36, 0.05)', border: '2px solid rgba(251, 191, 36, 0.3)' }}>
          <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px', fontSize: '1.05rem' }}>Full Set Bonus</strong>
          <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--text)' }}>
            Equipping all 9 pieces grants access to advanced upgrade mechanics, increased upgrade success rates, and special set attributes that unlock end-game potential.
          </p>
        </article>
      </section>

      {/* Equipment Sets */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Available Sets</span>
            <h2>Equipment Sets</h2>
          </div>
          <p>
            Multiple set options for different playstyles and progression levels.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {sets.map((set) => (
            <article key={set.name} className="panel" style={{ padding: '20px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem' }}>{set.name}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '600', marginTop: '4px', display: 'block' }}>
                    {set.tier}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                {set.description}
              </p>

              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Level Required</span>
                  <strong>{set.level_req}+</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pieces</span>
                  <strong>{set.pieces}</strong>
                </div>
                <div style={{ marginTop: '8px', padding: '10px', borderRadius: '8px', background: 'rgba(74, 124, 89, 0.1)', fontSize: '0.85rem' }}>
                  <strong style={{ color: 'var(--green-strong)' }}>Set Bonus: </strong>
                  <span style={{ color: 'var(--text-muted)' }}>{set.set_bonus}</span>
                </div>
                <div style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong>Source: </strong>{set.sources}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Upgrade Mechanics */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2>Upgrade Mechanics</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {upgradeMechanics.map((mechanic) => (
            <article key={mechanic.title} className="panel" style={{ padding: '20px', borderRadius: '14px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1.05rem' }}>{mechanic.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                {mechanic.description}
              </p>

              {mechanic.cost && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: '6px' }}>
                  <strong>Cost: </strong> {mechanic.cost}
                </div>
              )}
              {mechanic.effect && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: '6px' }}>
                  <strong>Effect: </strong> {mechanic.effect}
                </div>
              )}
              {mechanic.cap && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: '6px' }}>
                  <strong>Cap: </strong> {mechanic.cap}
                </div>
              )}
              {mechanic.notes && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Notes: </strong> {mechanic.notes}
                </div>
              )}
              {mechanic.risk && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Risk: </strong> {mechanic.risk}
                </div>
              )}
              {mechanic.convenience && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Convenience: </strong> {mechanic.convenience}
                </div>
              )}
              {mechanic.sources && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Sources: </strong> {mechanic.sources}
                </div>
              )}
              {mechanic.strategy && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Strategy: </strong> {mechanic.strategy}
                </div>
              )}
              {mechanic.access && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <strong>Access: </strong> {mechanic.access}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Professional Tips */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Gameplay Strategy</span>
            <h2>Professional Tips</h2>
          </div>
          <p>
            Expert advice for optimizing your gameplay and resource management.
          </p>
        </div>

        <article className="panel" style={{ padding: '24px', borderRadius: '14px' }}>
          <ul style={{ margin: '0', paddingLeft: '24px', fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '12px' }}>Save up Evolisca Tokens and spend them on Stamina Refillers. They cost 25 Evolisca Tokens from the NPC slightly north of your character's spawn location inside the temple.</li>
            <li style={{ marginBottom: '12px' }}>Always have Northern Pike, Rainbow Trout, and Wanda Fish consumables to give your character strong buffs to hunt spawns above your level and gain faster experience.</li>
            <li style={{ marginBottom: '12px' }}>Look on the market before spending Premium Points for better deals.</li>
            <li style={{ marginBottom: '12px' }}>Use equipment upgrade stones wisely and prioritize late-game equipment. Upgrade stone removers exist but they are not cheap.</li>
            <li style={{ marginBottom: '12px' }}>Acquire as many talent points as you can from completing spawn tasks, NPC missions, and hunting bosses.</li>
            <li style={{ marginBottom: '12px' }}>Each outfit, mount, and cosmetic gives your character one talent point.</li>
            <li style={{ marginBottom: '12px' }}>There are 4 main currency types: Gold coins (gold nuggets is equivalent to 1,000,000), Evolisca Tokens, Star Coins, and Premium Points (Server Store). There are also other currencies like dungeon tokens that can be traded for similar items you would find in stores. Other valuable stackable assets can include talent tokens (used to reskill your talents), monster skull tokens, and more.</li>
            <li style={{ marginBottom: '12px' }}>Configure your client settings and bot to maximize your gameplay performance and enhance your experience. Be smart and use scripts wisely.</li>
            <li style={{ marginBottom: '12px' }}>You can only add 5 items into your automatic looter as a free account. 10 items with a Premium Account.</li>
            <li>Buy 1,000 brown mushrooms as a low-capacity solution to always keep your character full and regenerating health and mana.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
