import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-europe');
}

export default function ZuneraOtEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-europe" />;
}
