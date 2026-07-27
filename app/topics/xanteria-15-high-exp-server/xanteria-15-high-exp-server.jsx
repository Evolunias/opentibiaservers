import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-high-exp-server');
}

export default function Xanteria15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-high-exp-server" />;
}
