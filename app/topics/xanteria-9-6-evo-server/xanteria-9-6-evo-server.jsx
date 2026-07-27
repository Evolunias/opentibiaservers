import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-evo-server');
}

export default function Xanteria96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-evo-server" />;
}
