import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-evo-server');
}

export default function Xanteria80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-evo-server" />;
}
