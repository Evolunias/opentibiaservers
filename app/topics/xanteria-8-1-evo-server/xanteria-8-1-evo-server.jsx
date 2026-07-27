import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-evo-server');
}

export default function Xanteria81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-evo-server" />;
}
