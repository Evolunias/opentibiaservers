import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-high-exp-server');
}

export default function Xanteria12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-high-exp-server" />;
}
