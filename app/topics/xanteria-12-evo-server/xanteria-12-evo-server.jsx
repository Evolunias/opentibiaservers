import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-evo-server');
}

export default function Xanteria12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-evo-server" />;
}
