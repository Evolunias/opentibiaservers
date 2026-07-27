import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-mexico-server');
}

export default function YurotsMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-mexico-server" />;
}
