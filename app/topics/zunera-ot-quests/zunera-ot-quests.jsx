import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-quests');
}

export default function ZuneraOtQuestsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-quests" />;
}
