import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-evo-server');
}

export default function Xanteria772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-evo-server" />;
}
