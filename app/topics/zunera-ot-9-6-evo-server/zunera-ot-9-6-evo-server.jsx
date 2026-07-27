import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-evo-server');
}

export default function ZuneraOt96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-evo-server" />;
}
