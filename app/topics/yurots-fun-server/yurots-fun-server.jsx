import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fun-server');
}

export default function YurotsFunServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-fun-server" />;
}
