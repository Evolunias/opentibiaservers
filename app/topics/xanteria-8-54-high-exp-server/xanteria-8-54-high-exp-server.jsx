import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-high-exp-server');
}

export default function Xanteria854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-high-exp-server" />;
}
