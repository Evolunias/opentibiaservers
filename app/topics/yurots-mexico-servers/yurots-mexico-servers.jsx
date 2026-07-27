import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-mexico-servers');
}

export default function YurotsMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-mexico-servers" />;
}
