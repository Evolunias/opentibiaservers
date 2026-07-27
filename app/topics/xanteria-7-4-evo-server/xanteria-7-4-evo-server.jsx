import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-evo-server');
}

export default function Xanteria74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-evo-server" />;
}
