import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-bosses');
}

export default function YurotsBossesKeywordPage() {
  return <StaticKeywordPage slug="yurots-bosses" />;
}
