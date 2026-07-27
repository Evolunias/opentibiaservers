import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-europe');
}

export default function YurotsBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-europe" />;
}
