import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-uk');
}

export default function YurotsBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-uk" />;
}
