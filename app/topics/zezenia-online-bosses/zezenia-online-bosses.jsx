import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-bosses');
}

export default function ZezeniaOnlineBossesKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-bosses" />;
}
