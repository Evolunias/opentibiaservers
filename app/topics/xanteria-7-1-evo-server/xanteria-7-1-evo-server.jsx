import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-evo-server');
}

export default function Xanteria71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-evo-server" />;
}
