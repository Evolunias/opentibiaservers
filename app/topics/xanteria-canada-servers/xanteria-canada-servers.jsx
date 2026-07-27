import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-canada-servers');
}

export default function XanteriaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-canada-servers" />;
}
