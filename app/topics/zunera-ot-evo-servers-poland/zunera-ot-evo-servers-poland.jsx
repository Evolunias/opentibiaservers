import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-servers-poland');
}

export default function ZuneraOtEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-servers-poland" />;
}
