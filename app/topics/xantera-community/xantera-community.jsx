import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-community');
}

export default function XanteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="xantera-community" />;
}
