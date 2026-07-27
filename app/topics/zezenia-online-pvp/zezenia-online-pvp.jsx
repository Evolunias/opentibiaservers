import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp');
}

export default function ZezeniaOnlinePvpKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp" />;
}
