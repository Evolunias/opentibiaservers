import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-quests');
}

export default function YurotsQuestsKeywordPage() {
  return <StaticKeywordPage slug="yurots-quests" />;
}
