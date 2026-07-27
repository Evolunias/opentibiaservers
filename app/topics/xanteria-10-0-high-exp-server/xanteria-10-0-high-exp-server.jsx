import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-high-exp-server');
}

export default function Xanteria100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-high-exp-server" />;
}
