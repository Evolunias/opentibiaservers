import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-high-exp-server');
}

export default function Xanteria86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-high-exp-server" />;
}
