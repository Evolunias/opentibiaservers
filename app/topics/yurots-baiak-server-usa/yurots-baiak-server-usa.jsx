import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-usa');
}

export default function YurotsBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-usa" />;
}
