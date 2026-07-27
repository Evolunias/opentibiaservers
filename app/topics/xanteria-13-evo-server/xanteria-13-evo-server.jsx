import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-evo-server');
}

export default function Xanteria13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-evo-server" />;
}
