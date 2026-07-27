import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-bosses');
}

export default function XanteriaBossesKeywordPage() {
  return <StaticKeywordPage slug="xanteria-bosses" />;
}
