import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-high-exp-server');
}

export default function Xanteria1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-high-exp-server" />;
}
