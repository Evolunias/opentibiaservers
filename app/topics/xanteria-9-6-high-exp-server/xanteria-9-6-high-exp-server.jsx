import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-high-exp-server');
}

export default function Xanteria96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-high-exp-server" />;
}
