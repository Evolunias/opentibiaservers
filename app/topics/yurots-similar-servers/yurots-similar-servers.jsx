import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-similar-servers');
}

export default function YurotsSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-similar-servers" />;
}
