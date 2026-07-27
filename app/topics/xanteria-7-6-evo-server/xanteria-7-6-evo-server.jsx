import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-evo-server');
}

export default function Xanteria76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-evo-server" />;
}
