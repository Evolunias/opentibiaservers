import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-europe-server');
}

export default function XanteriaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-europe-server" />;
}
