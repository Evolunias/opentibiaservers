import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-spells');
}

export default function ZuneraOtSpellsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-spells" />;
}
