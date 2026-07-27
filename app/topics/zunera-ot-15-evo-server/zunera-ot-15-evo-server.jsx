import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-evo-server');
}

export default function ZuneraOt15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-evo-server" />;
}
