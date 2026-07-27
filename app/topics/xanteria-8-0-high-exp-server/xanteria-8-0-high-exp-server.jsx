import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-high-exp-server');
}

export default function Xanteria80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-high-exp-server" />;
}
