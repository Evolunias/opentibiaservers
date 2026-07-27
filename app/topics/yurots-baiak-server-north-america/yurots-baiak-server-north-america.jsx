import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-north-america');
}

export default function YurotsBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-north-america" />;
}
