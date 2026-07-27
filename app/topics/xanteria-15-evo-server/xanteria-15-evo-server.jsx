import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-evo-server');
}

export default function Xanteria15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-evo-server" />;
}
