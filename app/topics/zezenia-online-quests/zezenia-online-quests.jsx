import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-quests');
}

export default function ZezeniaOnlineQuestsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-quests" />;
}
