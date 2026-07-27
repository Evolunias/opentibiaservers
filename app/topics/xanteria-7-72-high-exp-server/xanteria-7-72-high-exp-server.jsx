import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-high-exp-server');
}

export default function Xanteria772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-high-exp-server" />;
}
