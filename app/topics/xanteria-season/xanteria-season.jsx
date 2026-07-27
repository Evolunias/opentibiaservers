import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-season');
}

export default function XanteriaSeasonKeywordPage() {
  return <StaticKeywordPage slug="xanteria-season" />;
}
