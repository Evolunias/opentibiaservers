import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-fresh-start-server');
}

export default function Yurots84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-fresh-start-server" />;
}
