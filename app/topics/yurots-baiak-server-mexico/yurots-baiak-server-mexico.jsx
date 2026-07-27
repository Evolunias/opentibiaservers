import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-mexico');
}

export default function YurotsBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-mexico" />;
}
