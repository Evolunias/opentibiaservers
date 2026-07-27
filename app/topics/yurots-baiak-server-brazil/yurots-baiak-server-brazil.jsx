import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-brazil');
}

export default function YurotsBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-brazil" />;
}
