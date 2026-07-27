import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-spells');
}

export default function ZezeniaOnlineSpellsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-spells" />;
}
