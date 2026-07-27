import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-evo-server');
}

export default function Xanteria854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-evo-server" />;
}
