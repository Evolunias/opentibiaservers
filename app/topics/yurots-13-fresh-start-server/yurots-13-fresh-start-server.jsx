import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-fresh-start-server');
}

export default function Yurots13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-fresh-start-server" />;
}
