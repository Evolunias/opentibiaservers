import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-poland');
}

export default function ZuneraOtEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-poland" />;
}
