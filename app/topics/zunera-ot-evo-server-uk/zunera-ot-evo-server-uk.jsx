import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-uk');
}

export default function ZuneraOtEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-uk" />;
}
