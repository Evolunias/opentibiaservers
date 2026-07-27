import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-brazil');
}

export default function ZezeniaOnlinePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-brazil" />;
}
