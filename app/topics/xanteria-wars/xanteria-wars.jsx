import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-wars');
}

export default function XanteriaWarsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-wars" />;
}
