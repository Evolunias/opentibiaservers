import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-official');
}

export default function ZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-official" />;
}
