import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-evo-server');
}

export default function Xanteria84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-evo-server" />;
}
