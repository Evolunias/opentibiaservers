import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-community');
}

export default function ZaneraCommunityKeywordPage() {
  return <StaticKeywordPage slug="zanera-community" />;
}
