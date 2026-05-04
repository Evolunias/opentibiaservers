'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import { ChevronDown, Sword, Shield, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import './vocations.css';
import vocationsData from '@/public/data/vocations.json';

export default function VocationsPage() {
  const [expandedVocation, setExpandedVocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');

  const vocations = vocationsData.vocations || [];

  // Organize vocations by tier
  const vocationsWithTier = useMemo(() => {
    return vocations.map(v => {
      let tier = 'novice';
      if (v.id >= 5) tier = 'advanced'; // Master, Elder, Royal, Archer, Crusader
      if (v.id >= 9) tier = 'elite'; // Wizard, Priest, Archer, Crusader
      return { ...v, tier };
    });
  }, [vocations]);

  // Filter vocations
  const filteredVocations = useMemo(() => {
    return vocationsWithTier.filter(v => {
      const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = selectedTier === 'all' || v.tier === selectedTier;
      return matchesSearch && matchesTier;
    });
  }, [vocationsWithTier, searchQuery, selectedTier]);

  const getVocationIcon = (vocationName) => {
    if (vocationName.includes('Knight') || vocationName.includes('Crusader')) return Sword;
    if (vocationName.includes('Paladin') || vocationName.includes('Archer')) return Shield;
    if (vocationName.includes('Sorcerer') || vocationName.includes('Wizard')) return Zap;
    if (vocationName.includes('Druid') || vocationName.includes('Priest')) return Sparkles;
    return Shield;
  };

  const getTierDisplay = (tier) => {
    const tiers = {
      novice: { label: 'Novice' },
      advanced: { label: 'Advanced' },
      elite: { label: 'Elite' }
    };
    return tiers[tier] || tiers.novice;
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Master Your Craft</span>
          <h1>Vocations & Advancement</h1>
          <p>
            Evolisca offers four primary vocations, each with two advanced specializations and ultimate elite forms.
            Master your chosen path through war, PvP, and legendary dungeon battles. From Novice to Elite,
            your vocation defines your combat style, strengths, and destiny.
          </p>
          <div className="hero-actions">
            <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-primary">
              Choose Your Path
            </a>
            <Link href="/experience-stages" className="button-secondary">
              Experience Stages
            </Link>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quick Info</span>
            <h2>Vocation Overview</h2>
          </div>
          <div className="side-content">
            <div className="fact-item">
              <div className="fact-label">Total Paths</div>
              <div className="fact-value">{vocations.length}</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Advancement Tiers</div>
              <div className="fact-value">3 Levels</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Primary Vocations</div>
              <div className="fact-value">4 Base</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Elite Forms</div>
              <div className="fact-value">8 Ultimate</div>
            </div>
          </div>
        </aside>
      </section>

      {/* Filter Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Explore Vocations</h2>
          <p>Filter by advancement tier or search for your ideal vocation</p>
        </div>

        <div className="filter-container panel">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search vocations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <button
              className={`filter-btn ${selectedTier === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTier('all')}
            >
              All Tiers
            </button>
            <button
              className={`filter-btn ${selectedTier === 'novice' ? 'active' : ''}`}
              onClick={() => setSelectedTier('novice')}
            >
              Novice
            </button>
            <button
              className={`filter-btn ${selectedTier === 'advanced' ? 'active' : ''}`}
              onClick={() => setSelectedTier('advanced')}
            >
              Advanced
            </button>
            <button
              className={`filter-btn ${selectedTier === 'elite' ? 'active' : ''}`}
              onClick={() => setSelectedTier('elite')}
            >
              Elite
            </button>
          </div>
        </div>
      </section>

      {/* Vocations Grid */}
      <section className="content-section">
        <div className="vocations-grid">
          {filteredVocations.map((vocation) => {
            const Icon = getVocationIcon(vocation.name);
            const tierInfo = getTierDisplay(vocation.tier);
            const isExpanded = expandedVocation === vocation.id;

            return (
              <div
                key={vocation.id}
                className={`vocation-card panel ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setExpandedVocation(isExpanded ? null : vocation.id)}
              >
                <div className="vocation-header">
                  <div className="vocation-title-section">
                    <div className="vocation-icon-box">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3>{vocation.name}</h3>
                      <span className="tier-badge">
                        {tierInfo.label}
                      </span>
                    </div>
                  </div>
                  <ChevronDown className={`chevron ${isExpanded ? 'rotated' : ''}`} />
                </div>

                {isExpanded && (
                  <div className="vocation-details">
                    <div className="details-section">
                      <h4>Combat Stats</h4>
                      <div className="stats-grid-compact">
                        <div className="stat-item">
                          <label>Capacity Gain</label>
                          <span>{vocation.gaincap} per lvl</span>
                        </div>
                        <div className="stat-item">
                          <label>HP Gain</label>
                          <span>{vocation.gainhp} per lvl</span>
                        </div>
                        <div className="stat-item">
                          <label>Mana Gain</label>
                          <span>{vocation.gainmana} per lvl</span>
                        </div>
                        <div className="stat-item">
                          <label>Attack Speed</label>
                          <span>{vocation.attackspeed} ms (1 second)</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h4>HP & Mana Regeneration</h4>
                      <div className="stats-grid-compact">
                        <div className="stat-item">
                          <label>HP Amount</label>
                          <span>{vocation.gainhpamount}</span>
                        </div>
                        <div className="stat-item">
                          <label>Mana Amount</label>
                          <span>{vocation.gainmanaamount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h4>Soul & Modifiers</h4>
                      <div className="stats-grid-compact">
                        <div className="stat-item">
                          <label>Max Soul</label>
                          <span>{vocation.soulmax}</span>
                        </div>
                        <div className="stat-item">
                          <label>Soul Gain</label>
                          <span>{vocation.gainsoulamount}</span>
                        </div>
                        <div className="stat-item">
                          <label>Mana Mult</label>
                          <span>x{vocation.manamultiplier}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h4>Skill Multipliers</h4>
                      <div className="skills-grid">
                        <div className="skill-item">
                          <label>Fist</label>
                          <span>x{vocation.skillFist}</span>
                        </div>
                        <div className="skill-item">
                          <label>Club</label>
                          <span>x{vocation.skillClub}</span>
                        </div>
                        <div className="skill-item">
                          <label>Sword</label>
                          <span>x{vocation.skillSword}</span>
                        </div>
                        <div className="skill-item">
                          <label>Axe</label>
                          <span>x{vocation.skillAxe}</span>
                        </div>
                        <div className="skill-item">
                          <label>Distance</label>
                          <span>x{vocation.skillDistance}</span>
                        </div>
                        <div className="skill-item">
                          <label>Shield</label>
                          <span>x{vocation.skillShielding}</span>
                        </div>
                        <div className="skill-item">
                          <label>Fishing</label>
                          <span>x{vocation.skillFishing}</span>
                        </div>
                        <div className="skill-item">
                          <label>Experience</label>
                          <span>x{vocation.skillExperience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h4>Damage & Defense</h4>
                      <div className="multipliers-grid">
                        <div className="multiplier-item">
                          <label>Melee Dmg</label>
                          <span>{vocation.formulaMeleeDamage}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Dist Dmg</label>
                          <span>{vocation.formulaDistDamage}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Wand Dmg</label>
                          <span>{vocation.formulaWandDamage}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Magic Dmg</label>
                          <span>{vocation.formulaMagDamage}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Healing</label>
                          <span>{vocation.formulaMagHealingDamage}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Defense</label>
                          <span>{vocation.formulaDefense}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Mag Def</label>
                          <span>{vocation.formulaMagDefense}x</span>
                        </div>
                        <div className="multiplier-item">
                          <label>Armor</label>
                          <span>{vocation.formulaArmor}x</span>
                        </div>
                      </div>
                    </div>

                    {vocation.lessloss && (
                      <div className="details-section bonus-section">
                        <h4>Special Ability</h4>
                        <p>Experience Loss Reduction: <strong>{vocation.lessloss}%</strong> less XP loss on death</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredVocations.length === 0 && (
          <div className="empty-state">
            <p>No vocations found matching your filters.</p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Understanding Vocations</h2>
          <p>Choose the path that matches your playstyle</p>
        </div>

        <div className="vocation-info-grid">
          <div className="info-card panel">
            <div className="info-icon">⚔</div>
            <h3>Knights & Crusaders</h3>
            <p>Master melee combat with overwhelming offense and reliable defense. Dominate physical combat through skill and equipment.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">🛡</div>
            <h3>Paladins & Archers</h3>
            <p>Balance distance attacks with tactical support. Master ranged combat while providing healing and protection to allies.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">⚡</div>
            <h3>Sorcerers & Wizards</h3>
            <p>Command devastating magical offense with energy and destruction spells. Deliver massive damage from range safely.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">✨</div>
            <h3>Druids & Priests</h3>
            <p>Control nature's power with healing and support magic. Protect allies and restore health through elemental wisdom.</p>
          </div>
        </div>
      </section>

      {/* Vocation Evolution Paths */}
      <section className="content-section">
        <div className="section-header">
          <h2>Evolution Paths</h2>
          <p>Progress through the ranks as you master your craft</p>
        </div>

        <div className="vocation-info-grid">
          <div className="info-card panel">
            <div className="info-icon">⚡</div>
            <h3>Mage Path</h3>
            <div className="evolution-chain">
              Sorcerer → Master Sorcerer → Wizard
            </div>
            <p>Harness the power of magic with increasing mana regeneration and spell power as you progress through this arcane path.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">✨</div>
            <h3>Healer Path</h3>
            <div className="evolution-chain">
              Druid → Elder Druid → Priest
            </div>
            <p>Master nature and restoration magic, becoming an ever more powerful support force for your allies and yourself.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">🛡</div>
            <h3>Distance Path</h3>
            <div className="evolution-chain">
              Paladin → Royal Paladin → Archer
            </div>
            <p>Perfect the art of ranged combat, balancing offense and defense with increasing precision and tactical versatility.</p>
          </div>
          <div className="info-card panel">
            <div className="info-icon">⚔</div>
            <h3>Melee Path</h3>
            <div className="evolution-chain">
              Knight → Elite Knight → Crusader
            </div>
            <p>Become an unstoppable force in close combat, gaining raw power and survivability with each advancement.</p>
          </div>
        </div>
      </section>

      {/* Skill Learning Rates */}
      <section className="content-section">
        <div className="section-header">
          <h2>Skill Learning Rates</h2>
          <p>Lower numbers mean faster learning. Compare multipliers across vocation groups.</p>
        </div>

        <div className="skill-rates-grid">
          <div className="skill-group panel">
            <h3>Sorcerers & Wizards</h3>
            <div className="skill-rates">
              <div className="rate-item">
                <span className="skill-name">Fastest: Club</span>
                <span className="skill-mult">1.1x</span>
              </div>
              <div className="rate-item">
                <span className="skill-name">Slowest: Sword, Axe, Distance</span>
                <span className="skill-mult">2.0x</span>
              </div>
            </div>
          </div>

          <div className="skill-group panel">
            <h3>Druids & Priests</h3>
            <div className="skill-rates">
              <div className="rate-item">
                <span className="skill-name">Fastest: Club</span>
                <span className="skill-mult">1.1x</span>
              </div>
              <div className="rate-item">
                <span className="skill-name">Slowest: Sword, Axe, Distance</span>
                <span className="skill-mult">1.8x</span>
              </div>
            </div>
          </div>

          <div className="skill-group panel">
            <h3>Paladins & Archers</h3>
            <div className="skill-rates">
              <div className="rate-item">
                <span className="skill-name">Fastest: Distance, Shielding</span>
                <span className="skill-mult">1.1x</span>
              </div>
              <div className="rate-item">
                <span className="skill-name">Slowest: Melee Skills</span>
                <span className="skill-mult">1.2x</span>
              </div>
            </div>
          </div>

          <div className="skill-group panel">
            <h3>Knights & Crusaders</h3>
            <div className="skill-rates">
              <div className="rate-item">
                <span className="skill-name">Fastest: Axe, Sword, Fist</span>
                <span className="skill-mult">1.1x</span>
              </div>
              <div className="rate-item">
                <span className="skill-name">Slowest: Distance</span>
                <span className="skill-mult">1.4x</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Observations */}
      <section className="content-section">
        <div className="section-header">
          <h2>Vocation Mechanics</h2>
          <p>Understanding core attributes and progression</p>
        </div>

        <div className="mechanics-grid">
          <div className="mechanic-card panel">
            <h3>Death Protection</h3>
            <p>Advanced vocations (Master/Elder/Royal/Elite) reduce experience loss on death by <strong>45%</strong>, while the highest-tier vocations (Wizard/Priest/Archer/Crusader) reduce it by <strong>55%</strong>. This reflects your increased mastery.</p>
          </div>

          <div className="mechanic-card panel">
            <h3>Attack Speed</h3>
            <p>All vocations share a standard attack speed of <strong>1000ms (1 second)</strong> per attack. Your advantage comes from skill multipliers and equipment choices, not raw attack speed.</p>
          </div>

          <div className="mechanic-card panel">
            <h3>Mana Multiplier</h3>
            <p>Knights have a high mana multiplier (<strong>3.0x</strong>), making Magic Level harder to increase. Sorcerers and Druids have lower multipliers (<strong>1.1x</strong>), allowing faster magical progression.</p>
          </div>

          <div className="mechanic-card panel">
            <h3>Regeneration</h3>
            <p>Regeneration rates improve significantly with each vocation tier. Basic vocations tick every 1-6 seconds, while advanced tiers tick more frequently or recover more per tick, representing greater survivability.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
