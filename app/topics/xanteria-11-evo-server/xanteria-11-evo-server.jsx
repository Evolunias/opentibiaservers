import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-evo-server');
}

export default function Xanteria11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-evo-server" />;
}
