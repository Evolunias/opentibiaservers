import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-evo-server');
}

export default function ZuneraOt74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-evo-server" />;
}
