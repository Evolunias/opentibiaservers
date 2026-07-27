import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-quests');
}

export default function XanteriaQuestsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-quests" />;
}
