import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-europe-servers');
}

export default function XanteriaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-europe-servers" />;
}
