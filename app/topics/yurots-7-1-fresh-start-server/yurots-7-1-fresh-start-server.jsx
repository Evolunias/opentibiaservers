import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-fresh-start-server');
}

export default function Yurots71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-fresh-start-server" />;
}
