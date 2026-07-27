import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-south-america');
}

export default function YurotsBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-south-america" />;
}
